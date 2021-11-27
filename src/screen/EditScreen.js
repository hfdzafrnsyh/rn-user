import React from "react";
import { SafeAreaView, Text } from "react-native";
import EditUserComponent from "../components/EditUser.Component";


const EditScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <EditUserComponent navigation={navigation} route={route} />
        </SafeAreaView>
    )
}

export default EditScreen;