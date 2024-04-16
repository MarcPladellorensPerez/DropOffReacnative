import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from '../img/logoDropOff.png';
import { LIGHT_GRAY, ORANGE } from '../colors/colors';
import Header from '../components/Header';
import Route from '../components/Route';

const RouteScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      {/* Render the logo directly without a separate Header component */}
      <Header imageSource={logo} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Route label={"Route 1"}/>
        <Route label={"Route 2"}/>
        <Route label={"Route 3"}/>
        <Route label={"Route 4"}/>
        <Route label={"Route 5"}/>
        <Route label={"Route 6"}/>
        <Route label={"Route 7"}/>
        <Route label={"Route 8"}/>
        <Route label={"Route 9"}/>
        <Route label={"Route 10"}/>
        <Route label={"Route 11"}/>
        <Route label={"Route 12"}/>
        <Route label={"Route 13"}/>
        <Route label={"Route 14"}/>
        <Route label={"Route 15"}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
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
  scrollContainer: {
    flexGrow: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RouteScreen;
