import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AddUserComponent from "../components/addUser.Component";


const AddUserScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <AddUserComponent navigation={navigation} />
        </SafeAreaView>
    );
}



export default AddUserScreen;