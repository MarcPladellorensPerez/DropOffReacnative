import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Aquí puedes implementar la lógica para iniciar sesión
    console.log('Iniciar sesión con:', email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBlack}>Drop</Text>
        <Text style={styles.titleYellow}>Off</Text>
      </View>
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
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <View style={styles.registerContainer}>
        <Text>¿No tienes una cuenta?</Text>
          <Button title="Crear cuenta" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', // Fondo gris claro
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  titleBlack: {
    color: 'black',
    fontWeight: 'bold', // Letras en negrita
    fontSize: 24,
  },
  titleYellow: {
    color: '#FFD700', // Amarillo oscuro
    fontWeight: 'bold', // Letras en negrita
    fontSize: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
