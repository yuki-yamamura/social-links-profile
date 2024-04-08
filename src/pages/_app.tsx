import Head from 'next/head';

import type { AppProps } from 'next/app';

import '@/styles/globals.scss';

if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
  void import('@/mocks/server').then(({ server }) => server.listen());
}

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Frontend Mentor | Social links profile</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
