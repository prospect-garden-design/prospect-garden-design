const {
  globalPrefix: prefix4g,
  compPrefix: prefix4c,
} = require('../../../../utils/globalConfig');

module.exports = {
  width: { value: `1rem` },
  height: { value: `1rem` },
  'line-height': { value: `{${prefix4c}.radio.height.value}` },
  label: { 'padding-left': { value: `1.5rem` } },
  'label-blank': {
    'padding-left': { value: `{${prefix4c}.radio.height.value}` },
  },
  'border-radius': { value: `50%` },
  'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
  'form-group': { margin: { value: `0.5rem 0 0 0 ` } },
  'bg-color': { value: `{${prefix4c}.checkbox.bg-color.value}` },
  'border-color': { value: `{${prefix4c}.checkbox.border-color.value}` },
  'box-shadow': { value: `{${prefix4c}.checkbox.box-shadow.value}` },

  checked: {
    'bg-color': { value: `{${prefix4c}.checkbox.checked.bg-color.value}` },
    'border-color': {
      value: `{${prefix4c}.checkbox.checked.border-color.value}`,
    },
    'box-shadow': { value: `{${prefix4c}.checkbox.checked.box-shadow.value}` },
    focus: {
      'border-color': {
        value: `{${prefix4c}.checkbox.checked.focus.border-color.value}`,
      },
      'box-shadow': {
        value: `{${prefix4c}.checkbox.checked.focus.box-shadow.value}`,
      },
    },
  },
  hover: {
    'bg-color': { value: `{${prefix4c}.checkbox.hover.bg-color.value}` },
    'border-color': {
      value: `{${prefix4c}.checkbox.hover.border-color.value}`,
    },
    'box-shadow': { value: `{${prefix4c}.checkbox.hover.box-shadow.value}` },
  },
  focus: {
    'border-color': {
      value: `{${prefix4c}.checkbox.focus.border-color.value}`,
    },
    'box-shadow': { value: `{${prefix4c}.checkbox.focus.box-shadow.value}` },
  },
  checkmark: {
    left: { value: `0.3125rem` }, // 5
    top: { value: `0.3125rem` },
    width: { value: `0.375rem` },
    height: { value: `0.375rem` },
    'border-radius': { value: `{${prefix4c}.radio.border-radius.value}` },
    color: { value: `{${prefix4c}.checkbox.checkmark.color.value}` },
    'box-shadow': {
      value: `{${prefix4c}.checkbox.checkmark.box-shadow.value}`,
    },
  },
};
