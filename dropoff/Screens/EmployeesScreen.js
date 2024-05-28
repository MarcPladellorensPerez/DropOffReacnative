import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Employee from '../components/EmployeeComponent'; // Make sure the path is correct
import FirebaseFetchUtils from '../fireBaseFetchUtils';

const EmployeesList = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const fetchUtils = new FirebaseFetchUtils();
        const userLoginId = 'E4fhtfPhFcagyZf9Gb3dOXsZean2'; // Replace with your user login ID
        const employeeIds = await fetchUtils.fetchBusinessData(userLoginId, 'EmployeesIds');
        console.log('Employee IDs:', employeeIds); // Print the employee IDs
        const fetchedEmployees = await fetchUtils.fetchFieldData(employeeIds, 'Employees');
        console.log('Fetched employees:', fetchedEmployees); // Print the fetched employees
        setEmployees(fetchedEmployees.itemList);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
  
    fetchEmployees();
  }, []);

  const renderItem = ({ item }) => (
    <Employee employee={item} />
  );

  return (
    <View>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

export default EmployeesList;
