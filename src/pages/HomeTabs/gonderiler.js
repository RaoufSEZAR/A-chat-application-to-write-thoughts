/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{useState,useEffect} from 'react';
import {Text,View,FlatList,StyleSheet,Dimensions,SafeAreaView,Alert} from 'react-native';
import {AddTodo,TodoItem} from '../../components';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import moment from 'moment';


const devicesScreen = Dimensions.get('window');

function GonderilerScreen({navigation}) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        database()
            .ref('test')
            .on('value', (snapshot) => {
            const data = snapshot.val();

            if (!data) {
                return;
            }
            setTodos(Object.values(data));
                });
            }, []);

    const renderOurItem = ({item}) => <TodoItem item={item} save={savedMessages}/>;

    function addNewMessage(item) {

        if (item === '') {
            Alert.alert('Attention','Empty,make sure its not empty',[{text:'Understood', onPress:()=>console.log('close the alert') }]);
            return 0;
        }
        database()
            .ref('test')
            .push({
                text: item,
                // email:auth().currentUser.email.substring(0, auth().currentUser.email.indexOf('@')),
                email:auth().currentUser.email.split('@')[0],
                time:moment().format('MMMM Do YYYY, h:mm:ss a'),
            });
        }

    function savedMessages(item) {
        database()
            .ref(`${auth().currentUser.uid}`)
            .push({
                text: item.text,
                email:item.email,
            });
        return;
    }

    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 1}}>
                <View style={Styles.title}>
                    <Text style={Styles.titleText}>Gonderiler</Text>
                </View>
                <View style={{ flex: 1,paddingTop:10}}>
                <FlatList keyExtractor={(item, index) => index.toString()}
                    data={todos.sort((a,b)=>(a.time > b.time ? -1 : 1))}
                    renderItem={renderOurItem}
                />
                </View>
                <AddTodo addMessage={addNewMessage}/>
            </View>
        </SafeAreaView>
        );
    }

export {GonderilerScreen};

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
});

