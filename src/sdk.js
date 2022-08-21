const package = require('./package.json')

module.exports = {
  version: () => {
    console.log(`semver-single-app/v${package.version}`);
  }
}
