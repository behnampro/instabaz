import React, {Component} from 'react';
import {View,Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import {createMaterialTopTabNavigator, createAppContainer} from "react-navigation";

class Tab1 extends Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'yellow'}}>
                <Text>Tab 1</Text>
            </View>
        )
    }
}


class Tab2 extends Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'red'}}>
                <Text>Tab 2</Text>
            </View>
        )
    }
}

class Tab3 extends Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'black'}}>
                <Text>Tab 3</Text>
            </View>
        )
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    tab1 : {
        screen : Tab1,
        navigationOptions: {
            tabBarIcon : ({tintColor}) => <Icon name="md-apps" size={30} color={tintColor} />,
        }
    },
    tab2 : {
        screen : Tab2,
        navigationOptions: {
            tabBarIcon : ({tintColor}) =>  <Icon name="md-pricetags" size={30} color={tintColor} />,
        }
    },
    tab3 : {
        screen : Tab3,
        navigationOptions: {
            tabBarIcon :  ({tintColor})  =>  <Icon name="ios-bookmark" size={28} color={tintColor} />,
        }
    },

}, {
    initialRouteName: "tab1",
    tabBarOptions : {
        showLabel :false,
        showIcon : true,
        backgroundColor:"white",
        activeTintColor : 'rgba(0,0,0,1)',
        inactiveTintColor : 'rgba(0,0,0,.3)',
        style : {
            backgroundColor : "white"
        }
    },
    // navigationOptions: {
    //   activeTintColor : 'rgba(0,0,0,1)',
    //   inactiveTintColor : 'rgba(0,0,0,.3)',
    // }
});

const  appTabNavigator = createAppContainer(TabNavigator);
export default appTabNavigator;
