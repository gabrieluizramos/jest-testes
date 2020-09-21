const fetcher = require('./fetch');

const consultaDados = () => {
	return new Promise((resolve) => {
		fetcher.fetch(resolve)
	})
}

module.exports = {
	consultaDados
};