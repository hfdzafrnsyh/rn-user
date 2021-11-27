import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, AntDesign } from '@expo/vector-icons';


const UserComponent = ({ navigation, users, handleDeleteUser }) => {


    return (
        <View>

            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.containerUserCard}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', item)} key={item.id}>
                            <Text>{item.name}</Text>
                            <Text>{item.email}</Text>

                        </TouchableOpacity>

                        <AntDesign name="edit" size={24} style={styles.iconDelete} color="black" onPress={() => navigation.navigate('Edit', item)} />
                        <Feather name="delete" size={24} color="black" onPress={() => handleDeleteUser(item.id)} />

                    </View>
                )}
                keyExtractor={(id) => id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    containerUserCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 30,
        height: 150,
        borderRadius: 15,
        flexDirection: 'row'
    },
    iconDelete: {
        justifyContent: 'flex-end',
        marginLeft: 20
    }
})

export default UserComponent;