// Linting como infraestructura del oficio, desde la semana 1.
// Reglas normales de la industria. El preset FUNCIONAL (immutable-data, no-let,
// no-loop-statements) NO va aqui: llega hasta el cierre del proyecto, como
// transferencia de lo que ya vivieron en Elixir.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules', 'dist', 'coverage'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      eqeqeq: ['error', 'always'],
      'no-param-reassign': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'off'
    }
  }
);
