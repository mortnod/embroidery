import createShadow from '_lib/createShadow';

const shadows = {
  small: createShadow('small', 'black', 0.4),
  medium: createShadow('medium', 'black', 0.15),
  large: createShadow('large', 'black', 0.1),
} as const;

export default shadows;
