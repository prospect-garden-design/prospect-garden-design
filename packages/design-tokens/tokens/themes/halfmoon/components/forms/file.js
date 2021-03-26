const {
  globalPrefix: prefix4g,
  compPrefix: prefix4c,
} = require('../../../../utils/globalConfig');

module.exports = {
  height: { value: `{${prefix4c}.button.height.value}` }, // 32
  padding: { value: `{${prefix4c}.button.padding.value}` },
  'border-width': { value: `{${prefix4c}.button.border-width.value}` },
  'border-radius': { value: `{${prefix4c}.button.border-radius.value}` },
  'line-height': { value: `{${prefix4c}.file.height.value}` },
  'text-color': { value: `{${prefix4c}.button.text-color.value}` },
  'bg-color': { value: `{${prefix4c}.button.bg-color.value}` },
  'border-color': { value: `{${prefix4c}.button.border-color.value}` },
  'box-shadow': { value: `{${prefix4c}.button.box-shadow.value}` },
  hover: {
    'text-color': { value: `{${prefix4c}.button.hover.text-color.value}` },
    'bg-color': { value: `{${prefix4c}.button.hover.bg-color.value}` },
    'border-color': { value: `{${prefix4c}.button.hover.border-color.value}` },
    'box-shadow': { value: `{${prefix4c}.button.hover.box-shadow.value}` },
  },
  focus: {
    'text-color': { value: `{${prefix4c}.button.focus.text-color.value}` },
    'bg-color': { value: `{${prefix4c}.button.focus.bg-color.value}` },
    'border-color': { value: `{${prefix4c}.button.focus.border-color.value}` },
    'box-shadow': { value: `{${prefix4c}.button.focus.box-shadow.value}` },
  },
  invalid: {
    'text-color': { value: `{${prefix4c}.file.text-color.value}` },
    'bg-color': { value: `{${prefix4c}.file.bg-color.value}` },
    'border-color': { value: `{${prefix4c}.input.invalid.border-color.value}` },
    'box-shadow': { value: `{${prefix4c}.input.invalid.box-shadow.value}` },
    hover: {
      'text-color': { value: `{${prefix4c}.file.hover.text-color.value}` },
      'bg-color': { value: `{${prefix4c}.file.hover.bg-color.value}` },
      'border-color': {
        value: `{${prefix4c}.input.invalid.hover.border-color.value}`,
      },
      'box-shadow': {
        value: `{${prefix4c}.file.hover.box-shadow.value}`,
      },
    },
    focus: {
      'text-color': { value: `{${prefix4c}.file.focus.text-color.value}` },
      'bg-color': { value: `{${prefix4c}.file.focus.bg-color.value}` },
      'border-color': {
        value: `{${prefix4c}.input.invalid.focus.border-color.value}`,
      },
      'box-shadow': {
        value: `{${prefix4c}.input.invalid.focus.box-shadow.value}`,
      },
    },
  },
};
