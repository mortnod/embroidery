import { createStitches } from '@stitches/react';

import colors from './theme/colors';
import fonts from './theme/fonts';
import letterSpacings from './theme/letterSpacings';
import lineHeights from './theme/lineHeights';
import media from './theme/media';
import shadows from './theme/shadows';
import sizes from './theme/sizes';
import utils from './theme/utils';

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
    shadows,
  },
  media,
  utils,
});
