import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import Author from './Author'
import Comment from './Comments'

export default class Post extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Author nickname={'Fulano de Tal'} email='fulanodetal@gmail.com'></Author>
                <Image source={this.props.image} style={styles.image}></Image>
                <Comment comments={this.props.comments}></Comment>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (3 / 4),
        resizeMode: 'contain'
    }
})