import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ORANGE, LIGHT_GRAY } from '../colors/colors';

const EditEmployeeScreen = ({ route, navigation }) => {
  const { employee } = route.params;

  const [name, setName] = useState(employee.name);
  const [surname, setSurname] = useState(employee.surname);
  const [phone, setPhone] = useState(employee.phone);
  const [email, setEmail] = useState(employee.email);

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar los cambios en la base de datos
    console.log('Employee data saved', { name, surname, phone, email });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Surname:</Text>
      <TextInput style={styles.input} value={surname} onChangeText={setSurname} />

      <Text style={styles.label}>Phone:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Button title="Save" onPress={handleSave} color={ORANGE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_GRAY,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default EditEmployeeScreen;
