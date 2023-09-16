import { useCartContext } from 'modules/cart';
import { Button, ButtonSize } from 'modules/input/button';
import { Item } from 'modules/items';
import { FC } from 'react';

type AddToCartButtonProps = { item: Item };

const AddToCartButton: FC<AddToCartButtonProps> = ({ item }) => {
    const { addItem } = useCartContext();

    return (
        <Button
            size={ButtonSize.NORMAL}
            label="Add to Cart"
            onClick={() => addItem(item)}
        />
    );
};

export default AddToCartButton;
