import React,{Component} from "react";
import {View,Text,StyleSheet,Platform} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import EStyleSheet from "react-native-extended-stylesheet";

export default class Profile extends Component {

    static navigationOptions = () => ({
        headerLeft :
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} name="md-more" size={30} color="black" />
                <Icon style={styles.headerIcons} name="md-person-add" size={30} color="black" />
                <Icon style={styles.headerIcons} name="md-filing" size={30} color="black" />
            </View>,
        headerRight : <Text style={styles.title}>بهنام میرزایی</Text>
    });

    render() {
        return (
            <View>
                <Text >
                    Profile hjhjh Screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title : {
        ...Platform.select({
            ios: {
                fontFamily : "IRANSansMobile",
                fontWeight : "bold",
                color : "rgba(0,0,0,.7)"
            },
            android: {
                fontFamily : "IRANSansMobile_Bold",
            },
        }),
        marginRight : 14,
        fontSize : 18
    },
    headerContainer : {
        flex:1,
        flexDirection : "row",
        justifyContent : "flex-end",
        color : "rgba(0,0,0,.7)",
    },
    headerIcons : {
        marginLeft : 15,
        marginRight: 10,
        color : "rgba(0,0,0,.8)",
    }
});