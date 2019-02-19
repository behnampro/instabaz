import React,{Component} from "react";
import {View,Text,StyleSheet,Platform,Button,Image,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import TabProfileView from "./ProfileTab";

export default class Profile extends Component {

    static navigationOptions = () => ({
        headerLeft :
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} name="md-more" size={30} color="black"/>
                <Icon style={styles.headerIcons} name="md-person-add" size={30} color="black" />
                <Icon style={styles.headerIcons} name="md-filing" size={30} color="black" />
            </View>,
        headerRight : <Text style={styles.headerTitle}>بهنام میرزایی</Text>
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.FollowAndImageSection}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("./../../assets/images/profile.png")} />
                        <Icon style={styles.imageIcon} name="md-add-circle" size={30} color="black" />
                    </View>
                    <View style={styles.containerInfo}>
                        <View style={styles.profileInfo}>
                            <View style={styles.profileInfoTextNumber}>
                                <Text style={styles.profileInfoNumber}>85</Text>
                                <Text style={styles.profileInfoText}>پست ها</Text>
                            </View>
                            <View style={styles.profileInfoTextNumber}>
                                <Text style={styles.profileInfoNumber}>300</Text>
                                <Text style={styles.profileInfoText}>دنبال‌کننده</Text>
                            </View>
                            <View style={styles.profileInfoTextNumber}>
                                <Text style={styles.profileInfoNumber}>385</Text>
                                <Text style={styles.profileInfoText}>دنبال‌شونده</Text>
                            </View>
                        </View>
                        <View style={{ height : 60 , alignItems: 'center' , flexDirection : 'row' , marginLeft : 20 , marginRight : 20, marginTop : 0, paddingTop: 0 , marginBottom:20}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} activeOpacity={.6} style={{ borderWidth: 1 , borderColor : 'rgba(0,0,0,0.3)' , borderRadius: 2 , flex : 1}}>
                                <Text style={{ textAlign : 'center' , fontFamily : 'IRANSansMobile', padding : 2}}>ویرایش پروفایل</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{height:500}}>
                    <TabProfileView/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerTitle : {
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
        backgroundColor: "white"
    },

    container : {
        flex : 1,
    },

    FollowAndImageSection : {
        flexDirection: 'row-reverse' ,
        height : 160 ,
        paddingTop : 10,
    },

    //profile image
    imageContainer : {
        flex: .3,
        alignItems : 'center',
        marginTop : 15,
    },
    imageIcon : {
        bottom : 35,
        right : 30,
        borderRadius: 15,
        overflow : 'hidden',
        color : "rgba(0,0,0,.8)",
        backgroundColor: "white",
        padding : 0,
        margin : 0
    },
    image : {
        width: 80,
        height: 80,
        borderRadius : 40,
        borderColor : '#888',
        borderWidth : 2,
        margin : 5
    },
    profileImage : {
        flex : .3,
    },

    //profile data followers or following
    containerInfo : {
        flex : 0.7,
        flexDirection : "column",
        marginTop : 20,
        marginRight : 18,
        marginLeft : 18,

    },
    profileInfo : {
        height : 70,
        flexDirection : 'row',
        flex : 4,
        justifyContent: 'space-around',
        marginLeft : 19,
        marginRight : 19
    },
    profileInfoTextNumber : {
        flex : 0.33,
    },
    profileInfoText : {
        ...Platform.select({
            ios: {
                fontFamily : "IRANSansMobile",
                fontWeight : "bold",
            },
            android: {
                fontFamily : "IRANSansMobile_Bold",
            },
        }),
        textAlign : 'center'
    },
    profileInfoNumber : {
        ...Platform.select({
            ios: {
                fontFamily : "IRANSansMobile",
                fontWeight : "bold",
            },
            android: {
                fontFamily : "IRANSansMobile_Bold",
            },
        }),
        fontSize : 16,
        color : '#222',
        textAlign: 'center'
    },
});