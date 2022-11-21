import type { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { getProducts } from './api/Products';
import { Layout } from '../components/layout/layout';
import { Products } from '../components/Products';

export default function Home() {
  return (
    <Layout>
      <Products />
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