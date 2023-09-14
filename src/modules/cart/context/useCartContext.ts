import { useContext } from 'react';
import cartContext from './CartContext';

const useCartContext = () => {
    const context = useContext(cartContext);
    return context;
};

export default useCartContext;
