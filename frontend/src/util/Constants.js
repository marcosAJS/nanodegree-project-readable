export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_POSTS = 'LOAD_POSTS';
export const ADD_POST = 'LOAD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';

export const postColumns = [
	{ id: 'timestamp', label: 'Data de criação', sort: true },
	{ id: 'title', label: 'Título', sort: true },
	{ id: 'author', label: 'Autor', sort: true },
	{ id: 'category', label: 'Categoria', sort: false },
	{ id: 'voteScore', label: 'Votos', sort: true },
	{ id: 'deleted', label: 'Deletado', sort: false },
];
