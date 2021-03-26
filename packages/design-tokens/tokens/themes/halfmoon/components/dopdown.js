const {
  globalPrefix: prefix4g,
  compPrefix: prefix4c,
} = require('../../../utils/globalConfig');

module.exports = {
  menu: {
    'min-width': { value: '10.5rem' }, // 168
    padding: { value: '0.25rem' },
    'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
    'border-radius': { value: `{${prefix4g}.size.border.base.radius.value}` },
    'text-color': { value: `{${prefix4g}.color.base.text.val.value}` },
    'bg-color': { value: `{${prefix4g}.color.white.val.value}` },
    'border-color': { value: `{${prefix4g}.color.gray.dim.value}` },
    'box-shadow': { value: `{${prefix4g}.size.shadow.val.value}` },
  },
  arrow: {
    'spacing-x': { value: `0.5rem` },
    'spacing-y': { value: `0.5rem` },
  },
  content: {
    padding: { value: `0.75rem` },
  },
  divider: {
    height: { value: `1px` },
    'bg-color': { value: `{${prefix4g}.color.horizontal-rule.value}` },
  },
  item: {
    padding: { value: `0.6rem {${prefix4c}.dropdown.content.padding.value}` },
    'border-radius': { value: `0.125rem` },
    'text-color': { value: `{${prefix4c}.dropdown.menu.text-color.value}` },
    'bg-color': { value: `transparent` },
    hover: {
      'text-color': { value: `{${prefix4c}.dropdown.item.text-color.value}` },
      'bg-color': {
        value: `{${prefix4g}.color.black.val.value}`,
        modify: [{ type: `setAlpha`, amount: 0.025 }],
      },
    },
    focus: {
      'box-shadow': {
        value: `{${prefix4g}.size.shadow.hyperlink.focus.value}`,
      },
    },
  },
};
