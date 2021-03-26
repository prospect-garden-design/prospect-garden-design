const {
  globalPrefix: prefix4g,
  compPrefix: prefix4c,
} = require('../../../utils/globalConfig');

module.exports = {
  padding: { value: `0.0625rem 0.3125rem` },
  margin: { value: `0 0.0625rem` },
  'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
  'border-radius': { value: `0.125rem` }, // 2
  'font-size': { value: `0.75rem` }, // 12
  'line-height': { value: `{${prefix4g}.size.base.line-height.value}` }, // 1.5
  'border-color': {
    value: `{${prefix4g}.color.black.val.value}`,
    modify: [{ type: `setAlpha`, amount: 0.05 }],
  },
  'bg-color': { value: `{${prefix4g}.color.gray.light.val.value}` },
  'text-color': { value: `{${prefix4g}.color.base.text.val.value}` },
  kbd: {
    padding: { value: `{${prefix4c}.code.padding.value}` },
    margin: { value: `{${prefix4c}.code.margin.value}` },
    'border-width': { value: `{${prefix4c}.code.border-width.value}` },
    'border-radius': { value: `0.25rem` }, // 4
    'font-size': { value: `{${prefix4c}.code.font-size.value}` },
    'line-height': { value: `{${prefix4c}.code.line-height.value}` },
    'border-color': {
      value: `{${prefix4g}.color.black.val.value}`,
      modify: [{ type: `setAlpha`, amount: 0.2 }],
    },
    'bg-color': { value: `{${prefix4g}.color.white.val.value}` },
    'text-color': { value: `{${prefix4g}.color.base.text.val.value}` },
  },
};
