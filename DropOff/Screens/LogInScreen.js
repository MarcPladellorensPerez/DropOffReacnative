import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Image, TouchableOpacity } from 'react-native';
import logo from '../img/logoDropOff.png';
import { LIGHT_GRAY, ORANGE } from '../colors/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    console.log('Iniciar sesión con:', email, password);
  };

  const handleRegister = () => {
    console.log('Registrarse con:', email, password);
  };

  return (
    <View style={styles.container}>
      {/* Render the logo directly without a separate Header component */}
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
      {isLogin ? (
        <View style={styles.loginButton}>
          <Button title="Iniciar Sesión" onPress={handleLogin} color="white" /> 
        </View>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Repetir Contraseña"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre"
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
          />
          <Button title="Registrarse" onPress={handleRegister} color="#00FF00" /> 
        </>
      )}
      <View style={styles.switchContainer}>
        <Text style={styles.blackText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity>
          <Text style={styles.orangeText}>Crea una</Text>
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
  switchContainer: {
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

export default LoginScreen;
