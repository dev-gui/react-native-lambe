import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {

	render() {

		const comments = [
			{
				nickname: 'Maria',
				comments: 'Que foto linda!!'
			},
			{
				nickname: 'João',
				comments: 'Meio bosta :/'
			}
		]

		return (
			<View style={{ flex: 1 }}>
				<Header></Header>
				<Post image={require('./assets/imgs/fence.jpg')} comments={comments}></Post>
			</View>
		)
	}
}

