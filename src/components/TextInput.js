/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet, TextInput} from 'react-native';

function Input(props) {
  return (
    <View style={styles.InputContainer}>
      <TextInput placeholder={props.placeholder} keyboardType={props.type} onChangeText={props.onChangeText}/>
    </View>
  );
}

export {Input};

const styles = StyleSheet.create({

  InputContainer: {
      backgroundColor: '#eceff1',
      margin: 5,
      paddingLeft: 20,
      borderWidth: 2,
      borderRadius: 15,
  },
});
