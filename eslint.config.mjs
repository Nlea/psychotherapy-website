import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', '.wrangler/'] },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Add custom rules here if needed
    },
  },
];
