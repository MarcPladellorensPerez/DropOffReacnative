import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './Screens/LogInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from'./Screens/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerShown="false">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ animationEnabled: false, headerShown: false }} />
        <Stack.Screen name="Login" component={LogInScreen} options={{ animationEnabled: false, headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ animationEnabled: false, headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{  headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
