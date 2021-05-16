//Importing components from libraries
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

import { bottomTabNavigator } from '../components/bottomTabNavigator';
import CustomSideBarMenu  from '../components/CustomSideBarMenu';

//Displaying the app drawer navigator
export const AppDrawerNavigator = createDrawerNavigator({

  Home: {
      screen: bottomTabNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor, focused }) => <Icon name="home" type="font-awesome" size={26} color={tintColor}/>,
        title: "Home"
      }
    }
  
},
  {
    contentComponent: CustomSideBarMenu,

    contentOptions: {
      activeBackgroundColor: '#F1FCFF70',
      activeTintColor: '#57D3F2',
      inactiveTintColor: '#799197'
    }
  },
  {
    initialRouteName : 'Home'
  }
  )