import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const DetailScreen = ({ route, navigation }) => {

    const user = route.params
    console.log(user)

    return (
        <View style={styles.containerDetail}>
            <View style={styles.detailProfileIcon}>
                <Image source={require('../assets/default.png')} style={styles.imageProfile} />
                <Text style={{ fontSize: 25, color: '#fff' }}>{user.name}</Text>
            </View>
            <View style={styles.cardDetail}>
                <Text style={styles.textProfile}>Email : {user.email}</Text>
                <Text style={styles.textProfile}>Gender : {user.gender}</Text>
                <Text style={styles.textProfile}>Status : {user.status}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerDetail: {
        backgroundColor: '#808080'
    },
    detailProfileIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    imageProfile: {
        resizeMode: 'contain',
        width: 160,
        height: 140,
        marginVertical: 10,
        marginTop: 80
    },
    cardDetail: {
        backgroundColor: '#fff',
        height: '70%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center'
    },
    textProfile: {
        borderBottomWidth: 1,
        borderBottomColor: '#2a363b',
        fontSize: 18,
        marginVertical: 20
    }
})

export default DetailScreen;