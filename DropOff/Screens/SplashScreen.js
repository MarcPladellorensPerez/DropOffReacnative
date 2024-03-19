import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LIGHT_GRAY } from '../colors/colors';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a wait time before redirecting the user
    const timeout = setTimeout(() => {
      navigation.replace('Login'); // Redirect the user to the login screen
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../img/logoDropOff2.png')}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo2}
          source={require('../img/logoDropOffblack.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 150,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20, // Adjust margin as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo2: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
