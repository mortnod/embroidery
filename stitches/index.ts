import { createStitches } from '@stitches/react';

import colors from './colors';
import fonts from './fonts';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import media from './media';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import utils from './utils';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    sizes,
    fonts,
    letterSpacings,
    lineHeights,
    space: sizes,
    radii,
    shadows,
  },
  media,
  utils,
});
