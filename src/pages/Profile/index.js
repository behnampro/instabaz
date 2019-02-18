import React, {Component} from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import {createAppContainer, createStackNavigator} from "react-navigation";
import Profile  from "./Profile"
import Settings from "./Settings"
import Archive from "./Archive"


const ProfileNavigator = createStackNavigator({
    Profile : {
        screen : Profile,
    },
    Settings : {
        screen : Settings,
    },
    Archive : {
        screen : Archive,
    }
}, {
    initialRouteName: "Profile",
        tabBarOptions : {
        showLabel :false,
            activeTintColor : 'rgba(0,0,0,1)',
            inactiveTintColor : 'rgba(0,0,0,.3)',
    },
});

export default ProfileNavigator;
