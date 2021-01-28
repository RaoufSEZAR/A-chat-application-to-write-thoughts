/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity,StyleSheet, Text} from 'react-native';


const Label = (props)=> {
    return (
            <TouchableOpacity
            style={styles[props.theme]}
            onPress={props.click}>
                <Text
                style={styles[props.textColor]}
                >{props.label}</Text>
            </TouchableOpacity>
    );
};

export {Label};

const styles = StyleSheet.create({

    Label: {
    marginLeft:10,
    backgroundColor: '#eceff1',
    borderWidth: 2,
    color:'orange',
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignItems: 'center',
    textAlign:'center',
},
    text:{
        marginLeft:10,
        padding: 10,
        margin: 5,
        borderRadius: 15,
        alignItems: 'center',
        textAlign:'center',

    },
    textColor:{
        color:'#fff0f5',
        fontWeight: 'bold',
    },
});
