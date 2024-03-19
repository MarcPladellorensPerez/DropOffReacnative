import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from '../img/logoDropOff.png';
import { LIGHT_GRAY, ORANGE } from '../colors/colors';
import Header from '../components/Header';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    console.log('Iniciar sesión con:', email, password);
  };

  return (
    <View style={styles.container}>
      {/* Render the logo directly without a separate Header component */}
      <Header imageSource={logo} />

        <TouchableOpacity style={styles.Button} onPress={handleLogin}>
            <Text style={styles.textbtn}>Empleados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={handleLogin}>
            <Text style={styles.textbtn}>Puntos de venta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={handleLogin}>
            <Text style={styles.textbtn}>Rutas</Text>
        </TouchableOpacity>

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
  textbtn:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight:'500'
  },
  Button: {
    backgroundColor: ORANGE, // Background color for login button
    width: '82%', // Set width to 100%
    height: '7%',
    marginBottom: 10, // Add margin bottom
    marginTop: 50,
    borderRadius:50,
    justifyContent: 'center', // Alineación vertical al centro
    alignItems: 'center', // Alineación horizontal al centro
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  blackText: {
    color: 'black', 
    marginRight: 5, 
    fontSize: 16,
  },
  orangeText: {
    color: ORANGE, 
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
