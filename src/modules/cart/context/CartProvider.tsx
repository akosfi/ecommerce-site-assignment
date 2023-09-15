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
            const items = [...cart.items];
            const alreadyAddedItem = items.find(
                (cartItem) => cartItem.item.id === item.id
            );
            if (alreadyAddedItem) {
                alreadyAddedItem.quantity += 1;
            } else {
                items.push({ item, quantity: 1 });
            }

            setCart({ items });
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
