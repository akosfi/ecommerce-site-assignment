import { createContext } from 'react';
import { Cart } from '../domain/Cart';
import { Item } from 'modules/items';

export const intialCartContextValue = {
    cart: { items: [] },
    addItem: () => null,
};

const cartContext = createContext<{
    cart: Cart;
    addItem: (item: Item) => void;
}>(intialCartContextValue);

export default cartContext;
