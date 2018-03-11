module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb', 'prettier', 'prettier/react'],

  plugins: ['prettier'],
  globals: { fetch: false },
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never'
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/']
      }
    }
  }
};
