import axios from "axios";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const EditUserComponent = ({ navigation, route }) => {

    const user = route.params;

    const [users, setUsers] = useState({
        name: user.name,
        email: user.email,
        gender: user.gender,
        status: user.status
    })

    const onChangeName = (e) => {
        setUsers({ ...users, name: e })
    }

    const onChangeEmail = (e) => {
        setUsers({ ...users, email: e })
    }

    const onChangeGender = (e) => {
        setUsers({ ...users, gender: e })
    }

    const onChangeStatus = (e) => {
        setUsers({ ...users, status: e })
    }

    const handleUpdateUser = async (id) => {
        await axios.put(`https://gorest.co.in/public/v1/users/${id}`, users, {
            headers: {
                Authorization: "Bearer 769c8ee96810e82c1c9e6ed096240688dce0f0beab6206ace2df6103c4aa3e5d"
            }
        })
        alert('Update Success');
        navigation.push('Home');
    }



    return (
        <View style={styles.containerForm}>
            <TextInput placeholder="Name" style={styles.input}
                onChangeText={(e) => onChangeName(e)}
                value={users.name}
            />
            <TextInput placeholder="Email" style={styles.input}
                onChangeText={(e) => onChangeEmail(e)}
                value={users.email}
            />
            <TextInput placeholder="Gender" style={styles.input}
                onChangeText={(e) => onChangeGender(e)}
                value={users.gender}
            />
            <TextInput placeholder="Status" style={styles.input}
                onChangeText={(e) => onChangeStatus(e)}
                value={users.status}
            />
            <TouchableOpacity style={styles.btnUpdateUser} onPress={() => handleUpdateUser(user.id)}>
                <View>
                    <Text style={{ color: '#fff' }}>Update User</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '100%',
        borderColor: '#cecece',
        paddingLeft: 10,
        borderWidth: 2,
        marginTop: 20,

    },
    btnUpdateUser: {
        width: '100%',
        backgroundColor: '#841584',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 50
    },
    containerForm: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginTop: 50
    }
})

export default EditUserComponent;