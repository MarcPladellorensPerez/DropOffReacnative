import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity  } from 'react-native';
import Employee from '../components/EmployeeComponent'; // Asegúrate de que la ruta sea correcta
import FirebaseFetchUtils from '../fireBaseFetchUtils';

const EmployeesList = ({ route, navigation }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const fetchUtils = new FirebaseFetchUtils();
        const userLoginId = 'E4fhtfPhFcagyZf9Gb3dOXsZean2'; // Reemplaza con tu ID de inicio de sesión de usuario
        const employeeIds = await fetchUtils.fetchBusinessData(userLoginId, 'EmployeesIds');
        console.log('Employee IDs:', employeeIds); // Imprime los IDs de los empleados
        const fetchedEmployees = await fetchUtils.fetchFieldData(employeeIds, 'Employees');
        console.log('Fetched employees:', fetchedEmployees); // Imprime los empleados obtenidos
        setEmployees(fetchedEmployees.itemList);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
  
    fetchEmployees();
  }, []);

  const handleEmployeePress = (employee) => {
    navigation.navigate('EditEmployeeScreen', { employee });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEmployeePress(item)}>
      <View style={styles.employeeContainer}>
        <Employee employee={item} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employees List</Text>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 60,
    textAlign: 'center',
    color: '#333',
  },
  listContent: {
    paddingBottom: 16,
  },
  employeeContainer: {
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 10,
  },
});

export default EmployeesList;
