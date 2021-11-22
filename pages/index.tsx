import type { NextPage } from 'next';
import Head from 'next/head';

import { styled } from '_stitches';
import createShadow from '_lib/createShadow';
import desaturate from '_lib/desaturate';

const Box = styled('div');

const Square = styled('div', {
  background: 'white',
  borderRadius: '8px',
  size: '$20',
});

const Wrapper = styled('div', {
  width: '100%',
  background: '$gray100',
  p: '$10',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '$8',
});

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

        <Wrapper>
          <Square css={{ boxShadow: '$small' }} />
          <Square css={{ boxShadow: '$medium' }} />
          <Square css={{ boxShadow: '$large' }} />
        </Wrapper>

        <Wrapper css={{ background: '$green100' }}>
          <Square css={{ boxShadow: '$small' }} />
          <Square css={{ boxShadow: '$medium' }} />
          <Square css={{ boxShadow: '$large' }} />
        </Wrapper>
        <Wrapper css={{ background: '$green100' }}>
          <Square css={{ boxShadow: createShadow('small', 'green500') }} />
          <Square css={{ boxShadow: createShadow('medium', 'green500') }} />
          <Square css={{ boxShadow: createShadow('large', 'green500') }} />
        </Wrapper>
        <Wrapper css={{ background: '$green100' }}>
          <Square
            css={{
              boxShadow: createShadow('small', desaturate('green500', 0.4)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', desaturate('green500', 0.4)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', desaturate('green500', 0.4)),
            }}
          />
        </Wrapper>

        <Wrapper css={{ background: '$yellow100' }}>
          <Square css={{ boxShadow: '$small' }} />
          <Square css={{ boxShadow: '$medium' }} />
          <Square css={{ boxShadow: '$large' }} />
        </Wrapper>
        <Wrapper css={{ background: '$yellow100' }}>
          <Square css={{ boxShadow: createShadow('small', 'yellow500') }} />
          <Square css={{ boxShadow: createShadow('medium', 'yellow500') }} />
          <Square css={{ boxShadow: createShadow('large', 'yellow500') }} />
        </Wrapper>
        <Wrapper css={{ background: '$yellow100' }}>
          <Square
            css={{
              boxShadow: createShadow('small', desaturate('yellow500', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', desaturate('yellow500', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', desaturate('yellow500', 0.3)),
            }}
          />
        </Wrapper>

        <Wrapper css={{ background: '$red100' }}>
          <Square css={{ boxShadow: '$small' }} />
          <Square css={{ boxShadow: '$medium' }} />
          <Square css={{ boxShadow: '$large' }} />
        </Wrapper>
        <Wrapper css={{ background: '$red100' }}>
          <Square
            css={{
              boxShadow: createShadow('small', 'red600'),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', 'red600'),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', 'red600'),
            }}
          />
        </Wrapper>
        <Wrapper css={{ background: '$red100' }}>
          <Square
            css={{
              boxShadow: createShadow('small', desaturate('red600', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', desaturate('red600', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', desaturate('red600', 0.3)),
            }}
          />
        </Wrapper>
      </main>
    </Box>
  );
};

export default Home;
