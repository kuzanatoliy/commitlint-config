module.exports = {
  extends: ['./index.js'],
  rules: {
    'scope-enum': [2, 'always', []],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['CC-'],
    },
  },
};
