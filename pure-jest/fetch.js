const https = require('https');

const fetch = (onResolve) => {
	https.get('https://jsonplaceholder.typicode.com/todos/1', res => {
		const data = [];

		res.on('data', (d) => {
			data.push(d.toString());
		});

		res.on('end', () => {
			onResolve(JSON.parse(data.join('')));
		});
	});
}

const fetchDois = () => {
	
}

module.exports = { fetch, fetchDois };