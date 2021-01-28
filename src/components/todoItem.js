/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';


function TodoItem({item,save}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.Opacity}
            >
            <View style={styles.User} >
                <View style={styles.UserName}>
                    <FontAwesome5 name={'feather-alt'} color="#713975" size={20}/>
                    <Text style={styles.UserFormation}>{item.email}</Text>
                </View>
                <View>
                <Text style={styles.UserForma}>
                    {moment(`${item.time}`,'MMMM Do YYYY, h:mm:ss a').fromNow()}{''}
                    </Text>
                </View>
            </View>
                <Text style={styles.text}>{item.text}
                </Text>
                <View style={styles.save}>
                    <TouchableOpacity onPress={()=>save(item)}>
                            <FontAwesome5 name={'save'} color="white" size={35}/>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </View>
    );
}

export {TodoItem};

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
    UserForma:{
        fontStyle:'italic',
        color:'white',
    },
    save:{
        flexDirection:'row-reverse',
    },
});
