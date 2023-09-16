import { useContext, useMemo } from 'react';
import cartContext from './CartContext';

const useCartContext = () => {
    const { cart, addItem } = useContext(cartContext);

    const totalPrice = useMemo(
        () =>
            cart.items.reduce<number>(
                (totalAmount, { item, quantity }) =>
                    (totalAmount += item.price * quantity),
                0
            ),
        [cart.items]
    );

    const totalItemQuantity = useMemo(
        () =>
            cart.items.reduce<number>(
                (totalItemQuantity, { quantity }) =>
                    (totalItemQuantity += quantity),
                0
            ),
        [cart.items]
    );

    return { cart, addItem, totalPrice, totalItemQuantity };
};

export default useCartContext;
