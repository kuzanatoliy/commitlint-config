# @kuzanatoliorg/commitlint-config

Shared configuration to use a commitlint library into the scope of @kuzantoliorg projects.

### Precondition

The package requires the installations:

[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)

[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

### Install:

#### npm

```
npm install @kuzanatoliorg/commitlint-config --save-dev
```

#### yarn

```
yarn add @kuzanatoliorg/commitlint-config --dev
```

### Usage:

In case you don't have configuration the following **commitlint.config.js** configuration will be generated into the repository:

    module.exports = {
      extends: ['@commitlint/config-conventional'],
      rules: {
        'references-empty': [2, 'never'],
        'subject-case': [0, 'always'],
      },
    };
