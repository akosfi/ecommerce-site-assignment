import { Item } from 'modules/items';

export interface CartItem {
    item: Item;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
}
