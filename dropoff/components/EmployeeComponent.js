import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Employee = ({ employee }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {employee.name}</Text>
      <Text style={styles.text}>Surname: {employee.surname}</Text>
      <Text style={styles.text}>Phone: {employee.phone}</Text>
      <Text style={styles.text}>Email: {employee.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default Employee;