import { useQuery } from 'react-query';
import { getProducts } from '../pages/api/Products';

export const useGetProducts = () => {
  return useQuery('products', getProducts);
};