import React from 'react'
import { Gravatar } from 'react-native-gravatar'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Gravatar options={{ email: props.email, secure: true }} style={styles.avatar}></Gravatar>
            <Text style={styles.nickname}>{props.nickname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        color: '#444',
        fontSize: 15,
        fontWeight: 'bold',
    }
})