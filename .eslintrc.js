module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // If you're okay with using 'any'
    '@typescript-eslint/no-unsafe-function-type': 'off', // Allow some unsafe function types
    '@typescript-eslint/no-empty-object-type': 'off', // Allow empty object types
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off', // Next.js handles React imports automatically
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/no-unresolved': 'off', // Turn off unresolved import warnings
    'import/extensions': 'off', // Turn off extension-specific import warnings
    'no-use-before-define': 'off', // Allow definitions before use
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-props-no-spreading': 'off', // Useful if you're spreading props
    'react/prop-types': 'off', // We don't need PropTypes with TypeScript
    'react-hooks/exhaustive-deps': 'warn', // Enforce useEffect dependency array rules
    'no-console': 'warn', // Warn about console logs
    'no-debugger': 'warn', // Warn about debugger usage
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};
