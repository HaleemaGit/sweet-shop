import type { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { getProducts } from './api/Products';
import { Layout } from '../components/layout/layout';
import { Products } from '../components/Products';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Checkout } from '../components/basket/Checkout';

export default function Home() {
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push(('http://localhost:3000/auth/SignIn'));
    }
  }, [session]);

  return (
    <Layout>
      <Products />
      <Checkout />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products', getProducts);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};



// import type { GetStaticProps } from 'next';
// import { dehydrate, QueryClient } from 'react-query';
// import { getProducts } from './api/Products';
// import { Layout } from '../components/layout/layout';
// import { Products } from '../components/Products';

// export default function Home() {
//   return (
//     <Layout>
//       <Products />
//     </Layout>
//   );
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery('products', getProducts);

//   return {
//     props: { dehydratedState: dehydrate(queryClient) },
//   };
// };

