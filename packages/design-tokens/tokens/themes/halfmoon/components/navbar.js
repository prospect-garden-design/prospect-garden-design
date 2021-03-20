const {
  globalPrefix: prefix4g,
  compPrefix: prefix4c,
} = require('../../../utils/globalConfig');

module.exports = {
  height: { value: `5rem` },
  padding: { value: `1rem` },
  'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
  'border-color': {
    value: `{${prefix4g}.color.black.val.value}`,
    modify: [{ type: `setAlpha`, amount: `0.2` }],
  },
  'box-shadow': { value: `none` },
  'bg-color': { value: `{${prefix4g}.color.white.val.value}` },
  'fixed-bottom': {
    height: { value: `{${prefix4c}.navbar.height.value}` },
    'box-shadow': { value: `none` },
  },
  'static-bottom': {
    'box-shadow': {
      value: `{${prefix4c}.navbar.fixed-bottom.box-shadow.value}`,
    },
  },
};
