import { desaturate as desaturatePolished } from 'polished';

import { LiteralUnion } from '../types/literalUnion';
import hasKey from './hasKey';

import colors from '../theme/colors';

/**
 * Decreases the intensity of a color.
 *
 * @param color Supports both theme colors (like 'red100') and regular colors ('#123' and 'red')
 * @param saturation Number between 0 to 1. How much the color intensity should be decreased
 *
 * @example
 * // Usage
 * const Box = styled('div', {`
 *   background: ${desaturate('#CCCD64', 0.2)};
 *   background: ${desaturate('rgba(204,205,100,0.7)', 0.2)};
 * });`
 *
 * // CSS Output
 * .someClassHash {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */
const desaturate = (
  color: LiteralUnion<keyof typeof colors, string>,
  saturation: number
): string => {
  if (hasKey(colors, color)) {
    return desaturatePolished(saturation, colors[color]);
  }

  return desaturatePolished(saturation, color);
};

export default desaturate;
