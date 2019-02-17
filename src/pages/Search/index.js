import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";

export default class Search extends Component {
    render() {
        return (
            <View style = {styles.container} >
                <Text >
                    Search Screen
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
        backgroundColor: "#89729E"
    }
});