/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {Header} from '../../components';
import auth from '@react-native-firebase/auth';
import {View,FlatList,SafeAreaView} from 'react-native';
import {SavedItem} from '../../components';
import database from '@react-native-firebase/database';

function KayitlarScreen({navigation}) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        database()
            .ref(`${auth().currentUser.uid}`)
            .on('value', (snapshot) => {
            const data = snapshot.val();

            if (!data) {
                return;
            }
            setTodos(Object.values(data));
                });
            }, []);

    const renderOurItem = ({item}) => <SavedItem item={item}/>;
    function SignOut() {
        auth()
        .signOut()
        .then(() => navigation.navigate('Sign'));
    }
    return (
        <SafeAreaView
        style={{ flex: 1,}}
        >
        <View>
            <Header onPress={SignOut}/>
        </View>
                <View style={{ flex: 1,paddingTop:10}}>
                <FlatList keyExtractor={(item, index) => index.toString()}
                    data={todos}
                    renderItem={renderOurItem}
                />
                </View>
            {/* </View> */}
        </SafeAreaView>
        );
    }

export {KayitlarScreen};
