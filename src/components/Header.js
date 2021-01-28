/* eslint-disable prettier/prettier */
import React from 'react';
import {Text,View,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = (props)=> {

    return (
        <SafeAreaView>
            <View>
                <View style={Styles.title}>
                    <Text style={Styles.titleText}>Kayitlar</Text>
                    <TouchableOpacity style={Styles.Exit} onPress={props.onPress}>
                        <FontAwesome5 name={'sign-out-alt'} solid color="#713975" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        );
    }
export {Header};


const Styles = StyleSheet.create({
    title:{
        paddingBottom:5,
        borderBottomColor:'#713975',
        borderBottomWidth:2,
        paddingTop:5,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    titleText:{
        fontSize:25,
        fontWeight: 'bold',
        color:'#713975',
        paddingLeft:10,

    },
    Exit:{
        paddingRight:15,
    },
});


