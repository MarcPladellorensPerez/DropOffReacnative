import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { ORANGE } from '../colors/colors';

const CustomSwitchSelector = ({ onPress, isBusinessUser }) => {
  return (
    <View style={styles.container}>
      <SwitchSelector
        options={[
          { label: 'Usuario Business', value: true },
          { label: 'Treballador', value: false },
        ]}
        initial={isBusinessUser ? 0 : 1}
        textColor={'black'}
        selectedColor={'white'}
        buttonColor={ORANGE}
        borderColor={ORANGE}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 10,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});

export default CustomSwitchSelector;
