const { globalPrefix: prefix4g } = require('../../utils/globalConfig');

module.exports = {
  // test: {
  //   'empty-value': { value: `` },
  // },
  base: {
    'font-size': { value: `1.4rem` },
    'line-height': { value: 1.5 },
    html: {
      'font-size': { value: `62.5%` },
      'font-size-1600': { value: `75%` },
      'font-size-1920': { value: `87.5%` },
    },
    'extra-letter-spacing': { value: `0.03rem` },
  },
  border: {
    base: {
      width: { value: '1px' },
      radius: { value: '0.4rem' },
    },
    width1: { value: `{${prefix4g}.size.border.base.width.value}` },
    width2: { value: `2px` },
    width3: { value: `3px` },
    width4: { value: `4px` },
    width5: { value: `5px` },
    radius: {
      rounded1: { value: `{${prefix4g}.size.border.base.radius.value}` },
      rounded2: { value: '0.6rem' },
      rounded3: { value: '0.8rem' },
      'rounded-pill': { value: '50rem' },
      'hyperlink-focus-visible': {
        value: `{${prefix4g}.size.border.base.radius.value}`,
      },
    },
  },
  shadow: {
    val: {
      value: `0 0.2rem 0.4rem {${prefix4g}.color.shadow.value}`,
      replaceRefs: 'all',
    },
    small: {
      value: `0 0.1rem 0.2rem {${prefix4g}.color.shadow.value}`,
      replaceRefs: 'all',
    },
    large: {
      value: `0 0.4rem 0.8rem {${prefix4g}.color.shadow.value}`,
      replaceRefs: 'all',
    },
    'hyperlink-focus-visible-outline': { value: `none` },
    'hyperlink-focus-visible': {
      value: `0 0 0 0.2rem {${prefix4g}.color.brand.primary.val.value}`,
      replaceRefs: 'all',
    },
  },
  container: {
    width: {
      val: { value: `100%` },
      sm: { value: `54rem` },
      md: { value: `72rem` },
      lg: { value: `96rem` },
      xl: { value: `114rem` },
      fluid: { value: `100%` },
    },
  },
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
    // 'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
    // 'border-radius': { value: `{${prefix4g}.size.border.base.radius.value}` },
  },
};
