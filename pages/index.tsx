import type { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { getProducts } from './api/products';
import { Layout } from '../components/layout/layout';
import { Products } from '../components/Products';
import { Checkout } from '../components/basket/Checkout';
import SignIn from './auth/SignIn';
import { useAuth } from '../hooks/useAuth';


export default function Home() {
  const { session } = useAuth();
  return (
    <div>
    <Layout>
      <SignIn />
      {session && <><Products /><Checkout /></>
    }</Layout>
    </div>
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
// import { getProducts } from './api/products';
// import { Layout } from '../components/layout/layout';
// import { Products } from '../components/Products';
// import { Checkout } from '../components/basket/Checkout';
// import SignIn from './auth/SignIn';
// // import { useAuth } from '../hooks/useAuth';


// export default function Home() {
//   // const { session } = useAuth();
//   return (
//     <div>
//     <Layout>
    
//        <Products /><Checkout />
//     </Layout>
//     </div>
//   );
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery('products', getProducts);

//   return {
//     props: { dehydratedState: dehydrate(queryClient) },
//   };
// };

