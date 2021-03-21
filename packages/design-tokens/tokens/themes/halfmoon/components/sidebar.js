const {
  globalPrefix: prefix4g,
  compPrefix: prefix4c,
} = require('../../../utils/globalConfig');

module.exports = {
  width: { value: `16.25rem` }, // 260
  // padding: { value: `1rem` },
  'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
  'border-color': {
    value: `{${prefix4g}.color.black.val.value}`,
    modify: [{ type: `setAlpha`, amount: `0.2` }],
  },
  'box-shadow': { value: `none` },
  'bg-color': { value: `{${prefix4g}.color.white.val.value}` },
  overlay: {
    'bg-color': {
      value: `{${prefix4g}.color.black.val.value}`,
      modify: [{ type: `setAlpha`, amount: `0.75` }],
    },
  },
};
