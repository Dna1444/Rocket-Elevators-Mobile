import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function ElevatorStatus(props) {

    const [status, setStatus] = useState(props.route.params.status)

    //log out function
    function logOut() {
        props.navigation.navigate("LogIn");
    }
    function home() {
        props.navigation.navigate("secondePage");
    }

    const changeElevatorStatus = async () => {
        try {
            const data = await axios
                .put(`https://rocket-elevator-rest-api1.herokuapp.com/Elevators/${props.route.params.id}/updatestatus?status=Online`)
                .then(res => {
                    console.log(res.data)
                    setStatus(res.data.status);
                    return <TouchableOpacity><Text>Home</Text></TouchableOpacity>
                })

        } catch (e) {
            console.log(e)
        }
    };

    // change the color of the text if the status is offline or online
    function StatusColor(status) {
        if (status === "Offline" || status === "offline") {
            return <Text style={styles.offline}>{status}</Text>

        } else {
            return <Text style={styles.online}>{status}</Text>
        }
    }

    function changeButton(status) {
        if (status === "Offline" || status === "offline") {
            return (<TouchableOpacity style={styles.changeStatus} onPress={changeElevatorStatus} >
                <Text style={styles.buttonText}>change status</Text>
            </TouchableOpacity>)

        } else {
            return (<TouchableOpacity style={styles.changeStatus} onPress={home} >
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>)
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/RocketLogo.png")} style={styles.logo} resizeMode="contain" />
            <Text>Elevator : {props.route.params.id}</Text>
            <Text style={styles.text}>Is</Text>
            {StatusColor(status)}

            {changeButton(status)}




            <TouchableOpacity style={styles.loginBtn} onPress={logOut}>
                <Text style={styles.loginText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: "blue",
    },
    buttonText: {
        color: "red",
    },
    inputText: {
        height: 50,
        color: "white"
    },
    offline: {

        color: "red"
    },
    online: {

        color: "green"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        position: "absolute",
        bottom: 30,
    },
    changeStatus: {
        width: "80%",
        backgroundColor: "blue",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },

    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        marginTop: 20,
        top: 20,
        position: "absolute",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        marginBottom: 20,
    },
    text: {

        color: "black",
    },
});


