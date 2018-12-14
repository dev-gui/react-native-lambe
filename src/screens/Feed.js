import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends React.Component {

    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Reafael Brandão',
            email: 'rafarafarafa@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Sheldon',
                comments: 'Coooool!!'
            },
            {
                nickname: 'Emma',
                comments: 'Wow!!'
            }]
        },
        {
            id: Math.random(),
            nickname: 'John',
            email: 'blablablams@gmail.com',
            image: require('../../assets/imgs/boat.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item}></Post>}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})