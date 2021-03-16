const { globalPrefix: prefix4g } = require('../../utils/globalConfig');
const palette = require('./color-palette');
const colorGlobal = require('./color-global');
const size = require('./size');

const prefixedVars = {
  [prefix4g]: {
    color: { ...palette, ...colorGlobal },
    size,
  },
};

// console.log('==halfmoon prefixed global vars: ', JSON.stringify(prefix4g));

module.exports = prefixedVars;
