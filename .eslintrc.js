module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended' // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
    ],
    rules: {
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'quotes': ['warn', 'single', { 'avoidEscape': true, allowTemplateLiterals: true }],
        'no-trailing-spaces': 'warn',
        'semi': ['warn', 'always'],
        'semi-spacing': 'warn',
        'semi-style': ['warn', 'last'],
        'curly': 'error',
        'quote-props': ['error', 'as-needed'],
        'no-console': 'warn',
        'space-before-blocks': 'warn',
        'no-whitespace-before-property': 'warn',
        'block-spacing': 'warn',
        'keyword-spacing': ['warn', { 'before': true }],
        'array-bracket-spacing': ['warn', 'never', {
            'objectsInArrays': false,
            'arraysInArrays': false
        }],
        'func-call-spacing': ['warn', 'never'],
        'no-extra-parens': 'warn',
        'max-len': ['warn', {
            'code': 120,
            'ignoreTemplateLiterals': true,
            'ignoreStrings': true
        }],
        'new-cap': ['warn', {
            'newIsCap': true,
            'capIsNew': false
        }],
        'arrow-spacing': 'warn',
        'new-parens': 'warn',
        'space-in-parens': ['warn', 'never'],
        'no-lone-blocks': 'warn',
        'no-return-await': 'warn',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'switch-colon-spacing': 'error',
        'default-case': 'error',
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'object-curly-spacing': ['warn', 'always'],
        'no-multiple-empty-lines': ['warn', {
            'max': 2,
            'maxBOF': 0,
            'maxEOF': 1
        }],
        'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
        'key-spacing': ['warn', {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'strict'
        }],
        'eol-last': ['error', 'always'],
        'padded-blocks': ['error', 'never'],
        '@typescript-eslint/consistent-type-assertions': 0,
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
        '@typescript-eslint/no-parameter-properties': 1,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/member-access': 0,
        '@typescript-eslint/indent': 1,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/prefer-for-of': 2,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-member-accessibility': 0
    }
};
