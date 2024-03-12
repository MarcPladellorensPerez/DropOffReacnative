import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import logo from '../img/logoDropOff.png';
import { LIGHT_GRAY, ORANGE } from '../colors/colors';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    // Aquí puedes implementar la lógica para registrar un nuevo usuario
    console.log('Registrarse con:', email, password, repeatPassword, name, phone);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir Contraseña"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title={ "Registrarse" } onPress={ handleRegister } />
      <View style={styles.registerContainer}>
        <Text>¿Ya tienes una cuenta?</Text>
          <Button title="Iniciar sesion" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      backgroundColor: LIGHT_GRAY, // Light gray background
    },
    logo: {
      width: 200, // Adjust the width as needed
      height: 200, // Adjust the height as needed
      marginBottom: 20,
    },
    input: {
      width: '85%',
      height: 40,
      backgroundColor:'white',
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    loginButton: {
      backgroundColor: ORANGE, // Background color for login button
      width: '82%', // Set width to 100%
      marginBottom: 10, // Add margin bottom
      marginTop: 50,
      borderRadius:50,
    },
    registerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    blackText: {
      color: 'black', // Color negro
      marginRight: 5, // Espacio entre los textos
    },
    orangeText: {
      color: ORANGE, // Color naranja
      fontWeight: 'bold',
    },
  });  

export default RegisterScreen;
