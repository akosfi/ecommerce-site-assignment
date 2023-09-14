import { useCartContext } from 'modules/cart';
import { Item } from 'modules/items';
import { FC } from 'react';

type AddToCartButtonProps = { item: Item };

const AddToCartButton: FC<AddToCartButtonProps> = ({ item }) => {
    const { addItem } = useCartContext();

    return <button onClick={() => addItem(item)}>Add to cart</button>;
};

export default AddToCartButton;
