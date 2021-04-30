import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

const secondePage = (props) => {

    const [elevators, setElevator] = useState([]);
    // api called on load to get all elevator that are not online
    const elevatorFunction = async () => {
        try {
            const data = await axios
                .get('https://rocket-elevator-rest-api1.herokuapp.com/Elevators/inactiveelevators')
                .then(res => {
                    console.log(res.data)
                    setElevator(res.data);
                })

        } catch (e) {
            console.log(e)
        }
    };

    React.useEffect(() => {
        elevatorFunction()
    }, []);

    function logOut() {
        props.navigation.navigate("LogIn");
    }
    // To redirect Id and Status information to ElevatorStatusScreen
    function sendInfoToNextPage(id, status) {
        props.navigation.navigate("ElevatorStatus", {
            id: id,
            status: status,
        });
    }




    return (

        <View style={styles.container}>
            <Image source={require("../assets/RocketLogo.png")} style={styles.logo} resizeMode="contain" />
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtract={(elevators) => elevators.id}
                data={elevators}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.list}
                            onPress={() => sendInfoToNextPage(item.id, item.status)}
                        >
                            <Text style={styles.textbutton}>
                                {" "}
										Elevator # {item.id}, Status: {item.status}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />


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
        backgroundColor: "blue"
    },
    list: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "red",
        marginTop: 3,
        borderRadius: 8,
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

export default secondePage