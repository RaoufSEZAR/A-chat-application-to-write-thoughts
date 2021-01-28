/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {Label,Input} from '../../components';
import {SafeAreaView,Image,Alert, View} from 'react-native';
import {styles} from './index';
import auth from '@react-native-firebase/auth';


function Login(props) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function LoginIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate('Home'))
      .catch(() => Alert.alert('Attention','the email or password is not exist'));

  }
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#713975'}}>
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
      <View style={{margin: 15}}></View>
        <Label label="Login" theme="Label"
          click={LoginIn}
        />
        <Label label="Sign in"
        theme="text"
        textColor="textColor"
        click={()=> props.navigation.navigate('Sign')}
        />
      </View>
    </SafeAreaView>
  );
}

export {Login};
