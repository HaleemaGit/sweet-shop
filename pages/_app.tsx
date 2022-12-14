import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from 'next-auth/react';
import 'tailwindcss/tailwind.css';
import { CartProvider } from '../context/CartProvider';
import '../styles/globals.css'


export default function App({ Component, pageProps, err }: AppProps & { err: Error }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
                               
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CartProvider>
            <Component {...pageProps} err={err} />
          </CartProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
}