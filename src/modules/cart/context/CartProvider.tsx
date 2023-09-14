import { FC, ReactElement, useCallback, useState } from 'react';
import cartContext, { intialCartContextValue } from './CartContext';
import { Cart } from '../domain/Cart';
import { Item } from 'modules/items';

type CartProviderProps = {
    children: ReactElement | ReactElement[];
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<Cart>({ items: [] });

    const addItem = useCallback(
        (item: Item) => {
            const alreadyAddedItem = cart.items.find(
                (cartItem) => cartItem.item.id === item.id
            );
            setCart({
                items: [
                    ...cart.items.filter(
                        (cartItem) => cartItem.item.id !== item.id
                    ),
                    alreadyAddedItem
                        ? {
                              ...alreadyAddedItem,
                              quantity: alreadyAddedItem.quantity + 1,
                          }
                        : { item, quantity: 1 },
                ],
            });
        },
        [cart, setCart]
    );

    return (
        <cartContext.Provider value={{ cart, addItem }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;
