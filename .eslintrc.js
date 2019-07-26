// https://eslint.org/docs/user-guide/configuring
// https://standardjs.com/rules.html
module.exports = {
    extends: [
        'standard',
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4, { "SwitchCase": 1 }],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-prototype-builtins': 0,
        'semi': ['error', 'always'],
    },
};
