import type { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { getProducts } from './api/products';
import { Layout } from '../components/layout/layout';
import { Products } from '../components/Products';
import { useQuery } from 'react-query';
import { Checkout } from '../components/basket/Checkout';
import SignIn from './auth/SignIn';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import { useState } from 'react';
import { Product } from '../components/product-cards/product';



export default function Home() {
  const [products, setProducts] = useState([])

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: ()=> axios.get('/api/products'),
    onSuccess({data}) {
      setProducts(data)
    },
  })


  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error</span>
  }

  console.log("data: ", products)
  // const { session } = useAuth();
  return (
    <div>
    <Layout>
     && <div className='flex flex-col items-center justify-center'><h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center mb-8">
        WELCOME TO </h1>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center font-semibold tracking-widest text-amber-500">`GIGGLING SWEET LOUNGE`
      </h1></div>
      <SignIn />
     <>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center mb-2">
        START SHOPPING </h1>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center font-semibold tracking-widest text-amber-500">`AND GIGGLE TO THE WORLD!`
      </h1>
      {products && products.map((product) => <Product key={product.id} {...product} />)}

      <Checkout /></>
    </Layout>
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

