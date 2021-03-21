const { globalPrefix: prefix4g } = require('../../utils/globalConfig');

module.exports = {
  // test: {
  //   'empty-value': { value: `` },
  // },
  base: {
    'font-size': { value: `1rem` },
    // 'font-size': { value: `1.4rem` },
    'line-height': { value: 1.5 },
    html: {
      // 16px, for width <768px
      'font-size': { value: `100%` },
      // 18px, for 768px <= width < 1400px
      'font-size-md': { value: `112.5%` },
      // 20px, for width >= 1400px
      'font-size-xxl': { value: `125%` },
    },
    'extra-letter-spacing': { value: `0.03rem` },
  },
  border: {
    base: {
      width: { value: '1px' },
      radius: { value: '0.25rem' },
    },
    width1: { value: `{${prefix4g}.size.border.base.width.value}` },
    width2: { value: `2px` },
    width3: { value: `3px` },
    width4: { value: `4px` },
    width5: { value: `5px` },
    radius: {
      rounded1: { value: `{${prefix4g}.size.border.base.radius.value}` },
      rounded2: { value: '0.375rem' },
      rounded3: { value: '0.5rem' },
      'rounded-pill': { value: '50rem' },
      'hyperlink-focus-visible': {
        value: `{${prefix4g}.size.border.base.radius.value}`,
      },
    },
  },
  shadow: {
    val: {
      value: `0 0.125rem 0.25rem {${prefix4g}.color.shadow.value}`,
      replaceRefs: 'all',
    },
    small: {
      value: `0 0.0625rem 0.125rem {${prefix4g}.color.shadow.value}`,
      replaceRefs: 'all',
    },
    large: {
      value: `0 0.25rem 0.5rem {${prefix4g}.color.shadow.value}`,
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
      sm: { value: `33.75rem` },
      md: { value: `45rem` },
      lg: { value: `60rem` },
      xl: { value: `71.25rem` },
      xxl: { value: `82.5rem` },
      fluid: { value: `100%` },
    },
  },
  content: {
    spacing: {
      val: { value: `1.875rem` }, // 30
      xs: { value: `1.25rem` }, // 20
      half: { value: `0.9375rem` },
      'xs-half': { value: `0.625rem` },
    },
    title: {
      'font-size': { value: `1.25rem` },
      'font-weight': { value: `500` },
    },
    // 'border-width': { value: `{${prefix4g}.size.border.base.width.value}` },
    // 'border-radius': { value: `{${prefix4g}.size.border.base.radius.value}` },
  },
};
