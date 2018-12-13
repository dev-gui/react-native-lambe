import React from 'react'
import { View, Text, Platform, StyleSheet, Image } from 'react-native'
import icon from '../../assets/imgs/icon.png'

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={icon} style={styles.image}></Image>
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'shelter',
        fontSize: 28,
        color: '#000'
    }
})