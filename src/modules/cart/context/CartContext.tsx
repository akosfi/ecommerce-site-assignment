import { createContext } from 'react';
import { Cart } from '../domain/Cart';
import { Item } from 'modules/items';

const cartContext = createContext<{
    cart: Cart;
    addItem: (item: Item) => void;
}>({
    cart: { items: [] },
    addItem: () => null,
});

export default cartContext;
