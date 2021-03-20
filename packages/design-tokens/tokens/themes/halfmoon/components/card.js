const {
  globalPrefix: prefix4g,
  compPrefix: prefix4c,
} = require('../../../utils/globalConfig');

module.exports = {
  content: {
    spacing: {
      val: { value: `3rem` },
      xs: { value: `2rem` },
      half: { value: `1.5rem` },
      'xs-half': { value: `1rem` },
    },
    title: {
      'font-size': { value: `2rem` },
      'font-weight': { value: `500` },
    },
  },
  'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
  'border-radius': { value: `{${prefix4g}.size.border.base.radius.value}` },
  'border-color': {
    value: `{${prefix4g}.color.black.val.value}`,
    modify: [{ type: `setAlpha`, amount: `0.2` }],
  },
  'box-shadow': { value: `none` },
  'bg-color': { value: `{${prefix4g}.color.white.val.value}` },
  'text-color': { value: `{${prefix4g}.color.base.text.val.value}` },
  title: {
    'font-size': { value: `{${prefix4c}.card.content.title.font-size.value}` },
    'font-weight': {
      value: `{${prefix4c}.card.content.title.font-weight.value}`,
    },
  },
  'spacer-v': {
    height: { value: `{${prefix4c}.card.content.spacing.val.value}` },
    'height-xs': { value: `{${prefix4c}.card.content.spacing.xs.value}` },
  },
};
