import axios from 'axios';
import { parseToURLParameters } from './util/helper';

const URL_API = process.env.REACT_APP_URL_API;
const ENDPOINT_CATEGORIES = `${URL_API}/categories`;
const ENDPOINT_POSTS = `${URL_API}/posts`;

const headers = { Authorization: 'whatever-you-want' };

export function getCategories(params = null) {
	return axios.get(`${ENDPOINT_CATEGORIES}${parseToURLParameters(params)}`, {
		headers
	});
}

export function getPosts(params = null) {
	return axios.get(`${ENDPOINT_POSTS}${parseToURLParameters(params)}`, {
		headers
	});
}

export function getPostsByCategory(category) {
	return axios.get(`${URL_API}/${category}/posts`, {
		headers
	});
}

export function getComments(postId) {
	return axios.get(`${URL_API}/posts/${postId}/comments`, {
		headers
	});
}
