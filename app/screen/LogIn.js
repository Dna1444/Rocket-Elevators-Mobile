import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';

export default function LogIn(props) {

    const [email, userEmail] = React.useState("");

    const logInCheck = () => {
        fetch(`https://rocket-elevator-rest-api1.herokuapp.com/Employees/email/${email}`)
            .then((result) => {
                if (result.status === 200) {
                    props.navigation.navigate("secondePage");
                } else {
                    Alert.alert("invalide employee email");
                }


            });


    };
    return (
        <ImageBackground
            style={styles.container}
            source={require('../assets/mobileAppBackGround.jpeg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/RocketLogo.png')} />
                <Text style={styles.text}>ROCKET ELEVATORS</Text>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={userEmail}
                    value={email} />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={logInCheck}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        marginTop: 20,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        marginBottom: 20,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
    },
});


