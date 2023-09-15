import { AddToCartButton } from 'modules/cart/add-to-cart-button';
import { Item } from 'modules/items';
import { FC, useMemo } from 'react';

import css from './ListingItem.module.scss';

type ListingItemProps = {
    item: Item;
};

const ListingItem: FC<ListingItemProps> = ({ item }) => {
    const formattedPrice = useMemo(
        () =>
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(item.price),
        [item.price]
    );

    return (
        <div className={css['item']}>
            <div className={css['image']}>
                <img src={item.imageSrc} alt="item image" />
            </div>

            <p className={css['name']}>{item.name}</p>
            <p className={css['price']}>{formattedPrice}</p>
            <AddToCartButton item={item} />
            <div className={css['tooltip']}></div>
        </div>
    );
};

export default ListingItem;
