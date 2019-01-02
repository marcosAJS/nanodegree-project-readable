import {combineReducers} from 'redux';

function categories(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

function posts(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

function comments(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default combineReducers({categories, posts, comments})
