//Importing components from libraries
import React, { Component }  from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import EducationScreen from '../screens/EducationScreen';
import ResourceScreen from '../screens/ResourceScreen';

//Displaying the bottom tab navigator
export const bottomTabNavigator = createMaterialBottomTabNavigator({

    HomeScreen : {
        screen: HomeScreen,
        navigationOptions :{
        tabBarIcon : ({ tintColor, focused }) => <Icon name="home" type="font-awesome-5" size={23} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Home</Text>
        }
    },
    EducationScreen : {
        screen: EducationScreen,
        navigationOptions :{
        tabBarIcon : ({ tintColor, focused }) => <Icon name="book-reader" type="font-awesome-5" size={24} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Education</Text>
        }
    },
    ResourceScreen : {
        screen: ResourceScreen,
        navigationOptions :{
        tabBarIcon : ({ tintColor, focused }) => <Icon name="tools" type="font-awesome-5" size={24} color={tintColor} focused={true}/>,
        tabBarLabel : <Text style={{ fontSize: 12, textAlignVertical:"bottom", textAlign: 'center'}}>Resources</Text>
        }
    }
},
{
    initialRouteName: 'HomeScreen',
    activeColor: '#57D3F2',
    inactiveColor: '#799197',
    barStyle: { backgroundColor: 'white', borderTopWidth: 2.5 , borderTopColor: '#0866B3'},
}
);