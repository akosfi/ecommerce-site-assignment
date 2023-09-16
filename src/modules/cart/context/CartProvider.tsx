import { FC, ReactElement, useCallback, useState } from 'react';
import cartContext from './CartContext';
import { Cart } from '../domain/Cart';
import { Item } from 'modules/items';

type CartProviderProps = {
    children: ReactElement | ReactElement[];
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Cart>({ items: [] });

    const addItem = useCallback(
        (item: Item) => {
            const items = cart.items;
            const indexOfSelectedItemInCart = items.findIndex(
                (cartItem) => cartItem.item.id === item.id,
            );

            const selectedItemInCart = items[indexOfSelectedItemInCart];

            if (indexOfSelectedItemInCart !== -1 && selectedItemInCart) {
                setCart({
                    items: [
                        ...items.slice(0, indexOfSelectedItemInCart),
                        {
                            ...selectedItemInCart,
                            quantity: selectedItemInCart.quantity + 1,
                        },
                        ...items.slice(indexOfSelectedItemInCart + 1),
                    ],
                });
            } else {
                setCart({ items: [...items, { item, quantity: 1 }] });
            }
        },
        [cart, setCart],
    );

    return (
        <cartContext.Provider value={{ cart, addItem }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;
