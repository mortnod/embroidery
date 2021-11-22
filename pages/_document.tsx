import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getCssText } from '_stitches';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: getCssText() }} // Configure server side rendering for Stitches https://stitches.dev/docs/server-side-rendering
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
