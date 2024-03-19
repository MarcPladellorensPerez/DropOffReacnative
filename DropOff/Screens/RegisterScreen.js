import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import logo from '../img/logoDropOff.png';
import { LIGHT_GRAY, ORANGE } from '../colors/colors';
import Header from '../components/Header';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Alert.alert('Error', 'El correo electrónico no tiene un formato válido.');
      return; // Detener la función si el formato de correo electrónico no es válido
    }
  
    console.log('EMAIL:', email, 'PASSWORD: ', password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Header imageSource={logo} />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        placeholderStyle={styles.placeholder} // Add this line for placeholder style
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderStyle={styles.placeholder}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir Contraseña"
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        placeholderStyle={styles.placeholder}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        placeholderStyle={styles.placeholder}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={phone}
        onChangeText={setPhone}
        placeholderStyle={styles.placeholder}
      />
      <View style={styles.loginButton}>
        <Button title="Resgistrarse" onPress={handleRegister} color="white"/> 
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.blackText}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.orangeText}>Iniciar sesión</Text>
        </TouchableOpacity>
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
      width: 220, // Adjust the width as needed
      height: 220, // Adjust the height as needed
      marginBottom: 20,
    },
    input: {
      width: '85%',
      height: 40,
      backgroundColor:'white',
      borderRadius: 50,
      marginBottom: 20,
      paddingHorizontal: 10,
      color: '#333',
    },
    placeholder: {
      marginLeft: 20, // Add your desired margin left value
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
      fontSize: 16,
    },
    orangeText: {
      color: ORANGE, // Color naranja
      fontWeight: 'bold',
      fontSize: 16,
    },
  });  

export default RegisterScreen;
