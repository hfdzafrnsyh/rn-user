import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import axios from "axios";
import UserComponent from "../components/User.Component";

const HomeScreen = ({ navigation }) => {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get('https://gorest.co.in/public/v1/users');
        setUsers(data.data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    const handleDeleteUser = async (id) => {
        await axios.delete(`https://gorest.co.in/public/v1/users/${id}`, {
            headers: {
                Authorization: 'Bearer 769c8ee96810e82c1c9e6ed096240688dce0f0beab6206ace2df6103c4aa3e5d'
            }
        })

        setUsers((oldUser) => oldUser.filter(
            (itemUser) => itemUser.id !== id
        ))
        alert('Success Delete User')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>
                <UserComponent users={users} handleDeleteUser={handleDeleteUser} navigation={navigation} />
            </View>

            <View style={styles.buttonAdd}>
                <Button
                    title="addUser"
                    color="#841584"
                    onPress={() => navigation.navigate('AddUser')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonAdd: {
        width: '100%',
    }
})


export default HomeScreen;