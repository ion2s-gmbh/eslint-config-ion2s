module.exports = {
    extends: [
        './standard-js-rules.js',
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-prototype-builtins': 0,
        semi: ['error', 'always'],
    },
};
