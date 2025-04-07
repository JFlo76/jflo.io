module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        '@typescript-eslint'
        // Remove 'next' from here - it's not a plugin but a config
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // Add custom rules here
    },
    settings: {
        next: {
            rootDir: '.',
        },
    },
};
