import {
	LOAD_CATEGORIES,
	LOAD_POSTS,
	ADD_POST,
	UPDATE_POST,
	DELETE_POST,
	LOAD_COMMENTS
} from '../util/Constants';

export function loadCategories({ data }) {
	return {
		type: LOAD_CATEGORIES,
		data
	};
}

export function loadPosts(posts) {
	return {
		type: LOAD_POSTS,
		posts
	};
}

export function loadComments(comments) {
	return {
		type: LOAD_COMMENTS,
		comments
	};
}

export function addPost({ id, payload }) {
	return {
		type: ADD_POST,
		id,
		payload
	};
}

export function updatePost({ id, payload }) {
	return {
		type: UPDATE_POST,
		id,
		payload
	};
}

export function deletePost({ id }) {
	return {
		type: DELETE_POST,
		id
	};
}
