const { compPrefix: prefix4c } = require('../../../utils/globalConfig');
const { globalPrefix: prefix4g } = require('../../../utils/globalConfig');

const navbar = require('./navbar');
const sidebar = require('./sidebar');

const button = require('./button');
const buttonGroup = require('./button-group');
const card = require('./card');
const form = require('./forms/form');
const input = require('./forms/input');
const checkbox = require('./forms/checkbox');
const radio = require('./forms/radio');
const select = require('./forms/select');
const switcher = require('./forms/switcher');
const range = require('./forms/range');
const file = require('./forms/file');
const code = require('./html-code');
const list = require('./html-list');
const table = require('./html-table');
const htmlDetailsCollapse = require('./html-details-collapse');
const modal = require('./modal');
const alert = require('./alert');
const pagination = require('./pagination');
const breadcrumb = require('./breadcrumb');
const tooltip = require('./tooltip');
const badge = require('./badge');
const progress = require('./progress');

module.exports = {
  [prefix4c]: {
    button,
    'button-group': buttonGroup,
    card,
    navbar,
    sidebar,
    form,
    input,
    checkbox,
    radio,
    select,
    switcher,
    range,
    file,
    'html-code': code,
    'html-list': list,
    'html-table': table,
    'html-details-collapse': htmlDetailsCollapse,
    modal,
    alert,
    pagination,
    breadcrumb,
    tooltip,
    badge,
    progress,
  },
};
