module.exports = {
    extends: [
        '../lib/index.js',
        'plugin:vue/recommended',
    ],
    rules: {
        'vue/html-indent': ['warn', 4],
        'vue/max-attributes-per-line': ['warn', {
            singleline: 3,
        }],
    },
};
