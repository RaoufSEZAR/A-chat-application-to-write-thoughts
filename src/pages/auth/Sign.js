/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {Label,Input} from '../../components';
import {SafeAreaView,Image, View, Alert} from 'react-native';
import {styles} from './index';
import auth from '@react-native-firebase/auth';

function Sign(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    function SignIn() {
        if (password !== confirmPassword) {
            Alert.alert('Attention','please make sure the password and confirm password is same');
        }
        else {
            auth()
            .createUserWithEmailAndPassword(email,password)
            .then(() => props.navigation.navigate('Home'))
            .catch((err) => console.log(err));
        }
    }
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: '#713975'}}>
        <View style={styles.LogoContainer}>
        <Image
        style={styles.loginImage}
        source={require("../../images/loginImage.jpg")}/>
        <Label label="Welcome , enter your email to start"
        theme="text" textColor="textColor"
        />
        </View>
        <View style={{margin: 15}}></View>

        <View style={{flex: 1}}>
            <Input placeholder="name@example.com" type="email-address" onChangeText={(value) => setEmail(value)}/>
            <Input placeholder="Password" type="visible-password" onChangeText={(value) => setPassword(value)}/>
            <Input placeholder="Confirm Password" type="visible-password" onChangeText={(value) => setConfirmPassword(value)}/>
        <View style={{margin: 15}}></View>
            <Label label="Login"
            click={()=> props.navigation.navigate('Login')}
            theme="Label"
            />
            <Label label="Sign in"
            theme="text" textColor="textColor"
            click={SignIn}
            />
        </View>
        </SafeAreaView>
    );
}

export {Sign};
