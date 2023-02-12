import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from '../Styles';

const CustomTextInput = ({state,setState, title}) => {
  console.log("Calles",state)
  return (
    <View style={styles.subContainer}>
     <Text style={styles.titleTxt}>{title}</Text>
      <TextInput
        style={styles.txtInputStyle}
        value={state}
        onChangeText={txt => setState(txt)}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default CustomTextInput;

