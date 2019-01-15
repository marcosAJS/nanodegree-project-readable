import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { loadCategories, loadPosts, loadComments } from './actions';
import './App.scss';
import Layout from './components/Layout';
import PostList from './components/PostList';
import { getCategories, getPosts, getComments } from './ReadableAPI';

class App extends Component {
	componentDidMount() {
		getCategories().then(response => {
			this.props.loadCategories({ data: response.data });
		});
		this.retrievePostsAndComments();
	}

	async retrievePostsAndComments() {
		const respPost = await getPosts();
		this.props.loadPosts(respPost.data);
		
		respPost.data.forEach(async post => {
			const respComments = await getComments(post.id);
			this.props.loadComments(respComments.data || []);
		});
	}

	render() {
		return (
			<div className="App">
				<Layout loadPosts={this.loadPosts}>
					<Route exact path="/" component={PostList} />
					<Route exact path="/:category" component={PostList} />
				</Layout>
				)} />
			</div>
		);
	}
}

App = connect(
	null,
	{ loadCategories, loadPosts, loadComments }
)(App);

export default withRouter(App);
