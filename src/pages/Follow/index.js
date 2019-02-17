import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";

export default class Follow extends Component {
    render() {
        return ( 
            <View style = {styles.container} >
                <Text >
                Follow Screen 
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D2D7D3"
    }
});