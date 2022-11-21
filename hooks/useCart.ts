import { useMemo, useContext } from 'react';
import { CartStateContext } from '../context/CartProvider';

export const useCart = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return useMemo(() => context, [context]);
};