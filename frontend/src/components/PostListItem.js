import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import ListActions from './ListActions';

const PostListItem = ({ post }) => (
	<Paper className="post-list-item">
		<Grid container>
			<Grid item xs={3}>
				{post.title}
			</Grid>
			<Grid item xs={3}>
				{post.author}
			</Grid>
			<Grid item xs={2}>
				{post.category}
			</Grid>
			<Grid item xs={2}>
				{post.timestamp}
			</Grid>
			<Grid item xs={1}>
				{post.voteScore}
			</Grid>
		</Grid>
		<ListActions style={{ position: 'absolute', right: '16px', top: '25px' }} />
	</Paper>
);
export default PostListItem;
