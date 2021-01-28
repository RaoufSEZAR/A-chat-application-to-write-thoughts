/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {Login, Sign} from './pages/auth';
import {KayitlarScreen, GonderilerScreen} from './pages/HomeTabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const hasSession = auth().currentUser;

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
    );
}

function HomeStack() {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) =>
        generateIcon(focused, color, route),
        tabBarLabel: () => null,
        })}
        tabBarOptions={{
        inactiveTintColor: '#bf84c3',
        activeTintColor: '#713975',
    }}>
            <Tab.Screen name="Kayitlar" component={KayitlarScreen} />
            <Tab.Screen name="Gonderiler" component={GonderilerScreen} />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName={hasSession ? 'Home' : 'Auth'}
            screenOptions={{header: () => null}}>
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="Home" component={HomeStack} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

function generateIcon(focused, color, route) {
    let iconName;
    switch (route.name) {
        case 'Gonderiler':
            iconName = focused ? 'android-messages' : 'android-messages';
            break;
        case 'Kayitlar':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
        default:
            break;
    }
    return <Icon name={iconName} color={color} size={30} />;
  }
