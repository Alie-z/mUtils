module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "no-console": 0,
        "semi": ["error", "never"],
        "no-mixed-spaces-and-tabs": [2, false],
        'generator-star-spacing': 'off',
        "no-useless-escape": 'off'
    }
};