import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import Author from './Author'
import Comment from './Comments'
import AddComment from './AddComment'

export default class Post extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Author nickname={this.props.nickname} email={this.props.email}></Author>
                <Image source={this.props.image} style={[styles.image, { resizeMode: 'stretch' }]}></Image>
                <Comment comments={this.props.comments}></Comment>
                <AddComment></AddComment>
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
        marginVertical: 10
    }
})