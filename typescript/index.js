const disabledRules = require('./disabledTypescriptRules'); // eslint-disable-line

module.exports = {
    extends: [
        '../lib/index.js',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'comma',
                requireLast: true,
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false,
            },
        }],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/member-ordering': ['error'],
    },
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                semi: 'off',
                '@typescript-eslint/semi': ['error'],
                'no-useless-constructor': ['off'],
                'no-undef': ['off'],
            },
        },
        // Workaround to disable all TS-ESLint rules for .js files
        {
            files: ['*.js'],
            rules: disabledRules,
        },
    ],
};
