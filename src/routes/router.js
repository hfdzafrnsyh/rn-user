import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
import AddUserScreen from "../screen/addUser.Screen";
import EditScreen from "../screen/EditScreen";


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="AddUser" component={AddUserScreen} />
                <Stack.Screen name="Edit" component={EditScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;