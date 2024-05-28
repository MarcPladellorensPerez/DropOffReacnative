import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Route = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.RouteContainer}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={toggleCheckbox}
      >
        <Text style={styles.checkbox}>
          {isChecked ? '☑' : '▢'}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.label, { textDecorationLine: isChecked ? 'line-through' : 'none'}]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  RouteContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
    width: '100%',
  },
  checkboxContainer: {
    marginRight: 12,
  },
  checkbox: {
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10, // Adjust the marginLeft for separation
  },
});

export default Route;