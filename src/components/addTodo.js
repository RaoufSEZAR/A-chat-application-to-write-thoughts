/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, Keyboard,Dimensions, TouchableOpacity,TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const devicesScreen = Dimensions.get('window');


function AddTodo({addMessage}) {
  const [text,setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    };

  const add_To_do = ()=>{
    addMessage(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
      <View style={Styles.add}>
            <View style={Styles.InputContainer}>
              <TextInput placeholder="Write your message"
                onChangeText={changeHandler}
                value={text}
                />
            </View>
            <View style={Styles.plus}>
              <TouchableOpacity>
                <Icon name={'plus-circle'} color="#713975" size={40}
                onPress={add_To_do}
                />
              </TouchableOpacity>
            </View>
        </View>
  );
}

export {AddTodo};

const Styles = StyleSheet.create({
  title:{
      alignItems:'center',
      paddingBottom:5,
      borderBottomColor:'#713975',
      borderBottomWidth:2,
      paddingTop:5,

  },
  titleText:{
      fontSize:25,
      fontWeight: 'bold',
      color:'#713975',

  },
  add:{
      flexDirection: 'row',
      justifyContent:'space-around',
  },
  message:{
      flex:1,
      width:devicesScreen.width / 1.11,
  },
  plus:{
      paddingVertical:4,
      paddingTop:10,
  },
  InputContainer: {
    flex:1,
    backgroundColor: '#eceff1',
    margin: 5,
    paddingLeft: 20,
    borderWidth: 2,
    borderRadius: 15,
    width:devicesScreen.width / 1.11,
},
});



