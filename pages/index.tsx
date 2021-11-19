import type { NextPage } from 'next';
import Head from 'next/head';

import { styled } from '../stitches.config';

const Box = styled('div');

const Home: NextPage = () => {
  return (
    <Box
      css={{ height: '100%', maxWidth: '$256', mx: 'auto', mt: '$10', p: '$5' }}
    >
      <Head>
        <title>Embroidery</title>
        <meta
          name="description"
          content="Embroidery - An starter kit using Next and Stitches"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Embroidery</h1>

        <Box
          css={{
            background: '$gray200',
            p: '12px',
            mt: '$4',

            '@l1': {
              background: '$gray900',
              color: 'white',
            },
          }}
        >
          This box changes color depending on breakpoint
        </Box>
      </main>
    </Box>
  );
};

export default Home;
