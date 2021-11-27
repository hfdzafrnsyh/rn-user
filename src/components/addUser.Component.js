import axios from "axios";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const AddUserComponent = ({ navigation }) => {

    const [users, setUsers] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
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


    const handleAddUser = async () => {
        await axios.post(`https://gorest.co.in/public/v1/users`, users, {
            headers: {
                Authorization: "Bearer 769c8ee96810e82c1c9e6ed096240688dce0f0beab6206ace2df6103c4aa3e5d"
            }
        })

        navigation.push('Home');

        alert('Add User Success');
    }

    return (
        <View style={styles.containerForm}>
            <TextInput placeholder="Name" style={styles.input}
                onChangeText={(e) => onChangeName(e)}
            />
            <TextInput placeholder="Email" style={styles.input}
                onChangeText={(e) => onChangeEmail(e)}
            />
            <TextInput placeholder="Gender" style={styles.input}
                onChangeText={(e) => onChangeGender(e)}
            />
            <TextInput placeholder="Status" style={styles.input}
                onChangeText={(e) => onChangeStatus(e)}
            />
            <TouchableOpacity style={styles.btnAddUser} onPress={handleAddUser}>
                <View>
                    <Text style={{ color: '#fff' }}>Add User</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
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
    btnAddUser: {
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
export default AddUserComponent;
