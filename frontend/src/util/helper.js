export function parseToQueryString(obj) {
	if (typeof obj !== 'object' || obj === null) return '';

	return '?'.concat(
		Object.keys(obj)
			.map(key => `${key}=${obj[key]}`)
			.join('&')
	);
}

export function parseToURLParameters(obj) {
	if (typeof obj !== 'object' || obj === null) return '';

	return '/'.concat(
		Object.keys(obj)
			.map(key => obj[key])
			.join('/')
	);
}