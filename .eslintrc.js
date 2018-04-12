// https://eslint.org/docs/user-guide/configuring
module.exports = {
    extends: [
        'standard',
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'semi': ['error', 'always'],
    },
};
