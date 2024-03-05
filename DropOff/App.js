import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogInScreen from './Screens/LogInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LogInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
