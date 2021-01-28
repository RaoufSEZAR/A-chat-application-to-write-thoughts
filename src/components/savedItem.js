/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function SavedItem({item}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.Opacity}
            >
            <View style={styles.User} >
                <View style={styles.UserName}>
                    <FontAwesome5 name={'feather-alt'} color="#713975" size={20}/>
                    <Text style={styles.UserFormation}>{item.email}</Text>
                </View>
            </View>
                <Text style={styles.text}>{item.text}
                </Text>

            </SafeAreaView>
        </View>
    );
}

export {SavedItem};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#bf84c3',
        margin:5,
        borderRadius:10,

    },
    text:{
        marginTop: 10,
        backgroundColor: '#713975',
        margin:5,
        padding: 10,
        borderRadius:15,
        color:'white',
    },
    UserFormation:{
        color:'white',
        fontWeight: 'bold',
        paddingLeft:5,
    },
    Opacity: {
        borderRadius: 10,
        margin: 5,
    },
    User:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    UserName:{
        flexDirection:'row',
    },
});
