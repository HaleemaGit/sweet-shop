import type Prisma from '@prisma/client';
import { useCart } from '../../hooks/useCart';

type ProductProps = Readonly<Prisma.Product>;

export const Product = (product: ProductProps) => {
    const { id, image, name, price } = product;
    const { dispatch } = useCart();
  
    const addToCart = () => {
      dispatch({ type: 'addProduct', payload: product });
      dispatch({ type: 'openMenu' });
    };
  

  return (
    <article className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
        <img className="w-full h-full object-center object-cover lg:w-full lg:h-full" alt="" />
      </div>
      <div className="mt-4 flex justify-between">
        <h2 className="text-sm text-gray-700">
          <span aria-hidden="true" className="absolute inset-0" />
        </h2>
        <p className="text-sm font-medium text-gray-900"></p>
      </div>
      <button className="mt-6 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
        Buy
      </button>
      <button className="mt-4 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none">
        Add to Cart
      </button>
    </article>
  );
};