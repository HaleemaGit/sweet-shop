import { useQuery } from 'react-query';
import { getProducts } from '../pages/api/products';

export const useGetProducts = () => {
  return useQuery('products', getProducts);
};