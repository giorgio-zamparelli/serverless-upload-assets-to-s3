module.exports = {

	"env": {
		"es6": true,
		"node": true
	},
    "extends": "eslint:recommended",
	"root": true,
	"rules": {
		"indent": ["warn", "tab", {"SwitchCase": 1}],
		"semi": ['error', 'never']
	}

};
