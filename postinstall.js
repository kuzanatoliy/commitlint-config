const { cwd, exit } = require('node:process');
const { resolve } = require('node:path');
const { existsSync, copyFileSync } = require('node:fs');

if (!cwd().includes('node_modules')) {
  exit();
}

const rootDir = resolve(cwd(), '../../..');

const filenames = [
  'commitlint.config.js',
  '.commitlintrc.js',
  '.commitlintrc',
  '.commitlintrc.json',
  '.commitlintrc.yml',
];

if (!filenames.find((file) => existsSync(resolve(rootDir, file)))) {
  console.info('Create commitling configuration file');
  copyFileSync(
    resolve(__dirname, 'sample.js'),
    resolve(rootDir, 'commitlint.config.js')
  );
} else {
  console.info('Commitlint configuration file exists');
}
