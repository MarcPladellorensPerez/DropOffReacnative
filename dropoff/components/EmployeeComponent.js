import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'; // Import Card component from React Native Paper
import { ORANGE, LIGHT_GRAY} from '../colors/colors';

const Employee = ({ employee }) => {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
            <Text style={styles.employeeText}>Name: {employee.name}</Text>
            <View style={styles.line}></View>
            <Text style={styles.employeeText1}>Surname: {employee.surname}</Text>
            <Text style={styles.employeeText1}>Phone: {employee.phone}</Text>
            <Text style={styles.employeeText1}>Email: {employee.email}</Text>
        </Card>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        width: '85%',
        borderRadius: 10,
        elevation: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 5
    },
    employeeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        padding: '10px'
    },
    employeeText1: {
        fontSize: 16,
        color: '#666',
        padding: '10px'
    },
    line: {
        height: 2,
        backgroundColor: ORANGE,
        marginVertical: 8,
        borderRadius: 50,
    },
});

export default Employee;
