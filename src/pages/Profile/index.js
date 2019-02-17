import React, {Component} from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import { createStackNavigator } from "react-navigation";
import Profile  from "./Profile"
import Settings from "./Settings"


const ProfileNavigator = createStackNavigator({
    Profile : {
        screen : Profile,
        navigationOptions: {
            tabBarIcon :  ({tintColor})  =>  <Icon name="md-heart" size={50} color={tintColor} />,
        }
    },
    Settings : {
        screen : Settings,
        navigationOptions: {
            tabBarIcon :  ({tintColor})  =>  <Icon name="ios-person" size={50} color={tintColor} />,
        }
    },
});

export default ProfileNavigator;
