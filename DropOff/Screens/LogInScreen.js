import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../img/logoDropOff.png';
import { LIGHT_GRAY, ORANGE } from '../colors/colors';
import Header from '../components/Header';
import CustomSwitchSelector from '../components/CustomSwitchSelector'; // Importa el componente CustomSwitchSelector

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBusinessUser, setIsBusinessUser] = useState(true); // Estado para controlar si el usuario es de negocio o nuevo

  const handleLogin = () => {
    console.log('EMAIL:', email,'PASSWORD: ',  password);
    navigation.navigate('Home');
  };
  
  const handleLoginWorker = () => {
    console.log('EMAIL:', email,'PASSWORD: ',  password);
    navigation.navigate('Routes');
  };

  return (
    <View style={styles.container}>
      {/* Render the logo directly without a separate Header component */}
      <Header imageSource={logo} />

      {/* Utiliza el componente CustomSwitchSelector */}
      <CustomSwitchSelector
        onPress={(value) => setIsBusinessUser(value)}
        isBusinessUser={isBusinessUser}
      />

      {!isBusinessUser && ( // Renderiza un nuevo campo de entrada solo si el usuario es de negocio
        <TextInput
          style={styles.input}
          placeholder="Empresa"
          // Aquí establece el valor y la función onChange según tus necesidades
        />
      )}

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

      {isBusinessUser && (<View style={styles.loginButton} >
        <Button title="Iniciar Sesión" onPress={handleLogin} color="white" /> 
      </View>)}
      
      {!isBusinessUser && (<View style={styles.loginButton} >
        <Button title="Iniciar Sesión" onPress={handleLoginWorker} color="white" /> 
      </View>)}

      <View style={styles.registerContainer}>
        <Text style={styles.blackText}>¿No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
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
  input: {
    width: '85%',
    height: 40,
    backgroundColor:'white',
    borderRadius: 50,
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
