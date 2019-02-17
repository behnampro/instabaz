import React, {Component} from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import Home  from "./pages/HomeUser"
import Camera from "./pages/Camera"
import ProfileNavigator from "./pages/Profile"
import Search from "./pages/Search"
import Follow from "./pages/Follow"

const TabNavigator = createBottomTabNavigator({
  Home : {
    screen : Home,
    navigationOptions: {
      tabBarIcon : ({tintColor}) => <Icon name="ios-home" size={50} color={tintColor} />,
    }
  },
  Search : {
    screen : Search,
    navigationOptions: {
      tabBarIcon : ({tintColor}) =>  <Icon name="md-search" size={50} color={tintColor} />,
    }
  },
  Camera : {
    screen : Camera,
    navigationOptions: {
      tabBarIcon :  ({tintColor})  =>  <Icon name="md-camera" size={50} color={tintColor} />,
    }
  },
  Follow : {
    screen : Follow,
    navigationOptions: {
      tabBarIcon :  ({tintColor})  =>  <Icon name="md-heart" size={50} color={tintColor} />,
    }
  },
  Profile : {
    screen : ProfileNavigator,
    navigationOptions: {
      tabBarIcon :  ({tintColor})  =>  <Icon name="ios-person" size={50} color={tintColor} />,
    }
  },
}, {
  initialRouteName: "Home",
  tabBarOptions : {
    showLabel :false,
    activeTintColor : 'rgba(0,0,0,1)',
    inactiveTintColor : 'rgba(0,0,0,.3)',
  },
  // navigationOptions: {
  //   activeTintColor : 'rgba(0,0,0,1)',
  //   inactiveTintColor : 'rgba(0,0,0,.3)',
  // }
});

export default createAppContainer(TabNavigator)
