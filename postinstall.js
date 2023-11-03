const { cwd, exit } = require('node:process');
const { resolve } = require('node:path');
const { existsSync, copyFileSync } = require('node:fs');

if (!cwd().includes('node_modules')) {
  exit();
}

const rootDir = resolve(cwd(), '../../..');

const filenames = [
  'commitlint.config.js',
  'commitlint.config.cjs',
  '.commitlintrc.js',
  '.commitlintrc.cjs',
  '.commitlintrc',
  '.commitlintrc.json',
  '.commitlintrc.yml',
];

const { type } = require(resolve(rootDir, 'package.json'));

if (!filenames.find((file) => existsSync(resolve(rootDir, file)))) {
  console.info('Create commitling configuration file');
  copyFileSync(
    resolve(__dirname, 'sample.js'),
    resolve(
      rootDir,
      type === 'module' ? 'commitlint.config.cjs' : 'commitlint.config.js'
    )
  );
} else {
  console.info('Commitlint configuration file exists');
}
