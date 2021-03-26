const { compPrefix: prefix4c } = require('../../../utils/globalConfig');
const { globalPrefix: prefix4g } = require('../../../utils/globalConfig');

const navbar = require('./navbar');
const sidebar = require('./sidebar');

const button = require('./button');
const buttonGroup = require('./button-group');
const card = require('./card');
const code = require('./code');
const form = require('./forms/form');
const input = require('./forms/input');
const checkbox = require('./forms/checkbox');
const radio = require('./forms/radio');
const select = require('./forms/select');
const switcher = require('./forms/switcher');
const range = require('./forms/range');
const file = require('./forms/file');

module.exports = {
  [prefix4c]: {
    button,
    'button-group': buttonGroup,
    card,
    navbar,
    sidebar,
    code,
    form,
    input,
    checkbox,
    radio,
    select,
    switcher,
    range,
    file,
  },
};
