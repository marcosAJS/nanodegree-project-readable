import { combineReducers } from 'redux';
import {
	LOAD_CATEGORIES,
	LOAD_POSTS,
	ADD_POST,
	DELETE_POST,
	UPDATE_POST,
	LOAD_COMMENTS
} from '../util/Constants';

function categories(state = {}, action) {
	switch (action.type) {
		case LOAD_CATEGORIES:
			const { data } = action;
			return {
				...data
			};
		default:
			return state;
	}
}

const initialPostState = {
	byId: [],
	byHash: {}
};

function posts(state = initialPostState, action) {
	switch (action.type) {
		case LOAD_POSTS:
			const { posts } = action;
			const byId = posts.map(p => p.id);
			const byHash = posts.reduce((acc, cV) => {
				acc[cV.id] = cV;
				return acc;
			}, {});
			return {
				...state,
				byId: Array.from(new Set([...state.byId, ...byId])),
				byHash: {
					...state.byHash,
					...byHash
				}
			};

		case ADD_POST: {
			return {
				byId: [...state.byId, action.id],
				byHash: {
					...state.byHash,
					[action.id]: action.payload
				}
			};
		}

		case UPDATE_POST: {
			state.byHash[action.id] = {
				...state.byHash[action.id],
				...action.payload
			};
			return {
				...state
			};
		}

		case DELETE_POST: {
			const filtered = state.byId.filter(item => item !== action.id);
			delete state.byHash[action.id];

			return {
				byId: filtered,
				byHash: state.byHash
			};
		}

		default:
			return state;
	}
}

function comments(state = [], action) {
	switch (action.type) {
		case LOAD_COMMENTS:
			const { comments } = action;
			console.log(comments);
			return [...state, ...comments];
		default:
			return state;
	}
}

export default combineReducers({ categories, posts, comments });
