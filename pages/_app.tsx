import type { AppProps } from 'next/app';

import { globalCss } from '_stitches';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  'html, body, #__next': {
    height: '100%',
    fontFamily: '$sansSerif',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
export default MyApp;
