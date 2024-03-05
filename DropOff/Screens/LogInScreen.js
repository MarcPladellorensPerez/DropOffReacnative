import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    // Aquí puedes implementar la lógica para iniciar sesión
    console.log('Iniciar sesión con:', email, password);
  };

  const handleRegister = () => {
    // Aquí puedes implementar la lógica para registrar un nuevo usuario
    console.log('Registrarse con:', email, password);
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
      {isLogin ? (
        <Button title="Iniciar Sesión" onPress={handleLogin} />
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
          <Button title="Registrarse" onPress={handleRegister} />
        </>
      )}
      <View style={styles.switchContainer}>
        <Text>¿No tienes una cuenta?</Text>
        <Switch value={!isLogin} onValueChange={setIsLogin} />
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
