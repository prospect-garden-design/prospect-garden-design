const { compPrefix: prefix4c } = require('../../../utils/globalConfig');
const { globalPrefix: prefix4g } = require('../../../utils/globalConfig');

const navbar = require('./navbar');
const sidebar = require('./sidebar');

const button = require('./button');
const buttonGroup = require('./button-group');
const card = require('./card');
const checkbox = require('./checkbox');

module.exports = {
  [prefix4c]: {
    button,
    checkbox,
    'button-group': buttonGroup,
    card,
    navbar,
    sidebar,
  },
};
