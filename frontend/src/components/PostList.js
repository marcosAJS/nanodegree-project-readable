import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadPosts } from '../actions';
import { postColumns } from '../util/Constants';
import ListOrganizer from './ListOrganizer';
import PostListItem from './PostListItem';
class PostList extends Component {
	onSortList = event => {
		this.setState({ sortColumn: event.target.value });
	};

	render() {
		console.log('POST LIST PROPS', this.props);
		const { posts, match } = this.props;
		return (
			<div className="post-list">
				<h1>{this.props.match.params.category} posts</h1>

				<ListOrganizer
					sortColumn="voteScore"
					sortList={this.onSortList}
					columnsToOrganize={postColumns}
					sortList={this.onSortList}
					style={{float: 'right', margin: '1em'}}
				/>

				<div className="post-list-header">
					<Grid container>
						<Grid item xs={3}>
							Título
						</Grid>
						<Grid item xs={3}>
							Autor
						</Grid>
						<Grid item xs={2}>
							Categoria
						</Grid>
						<Grid item xs={2}>
							Criação
						</Grid>
						<Grid item xs={1}>
							Votos
						</Grid>
					</Grid>
				</div>
				<div className="post-list-items">
					{posts &&
						posts
							.filter(post => post.category === match.params.category)
							.map(post => <PostListItem key={post.id} post={post} />)}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ posts }) {
	return {
		posts: Object.keys(posts.byHash).map(item => posts.byHash[item])
	};
}

PostList = connect(
	mapStateToProps,
	{ loadPosts }
)(PostList);

export default withRouter(PostList);
