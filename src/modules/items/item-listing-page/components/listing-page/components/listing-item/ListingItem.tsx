import { AddToCartButton } from 'modules/cart/add-to-cart-button';
import { Item } from 'modules/items';
import { FC } from 'react';

import { PriceFormatter } from 'modules/data-display/price-formatter';
import { Card } from 'modules/data-display/card';
import ToolTip from './components/tooltip/Tooltip';

import css from './ListingItem.module.scss';

type ListingItemProps = {
    item: Item;
};

const ListingItem: FC<ListingItemProps> = ({ item }) => (
    <Card className={css['card']}>
        <div className={css['image']}>
            <img src={item.imageSrc} alt="item image" />
        </div>

        <p className={css['name']}>{item.name}</p>
        <PriceFormatter price={item.price}>
            {(formattedPrice) => (
                <p className={css['price']}>{formattedPrice}</p>
            )}
        </PriceFormatter>
        <AddToCartButton item={item} />
        <ToolTip item={item} className={css['tooltip']} />
    </Card>
);

export default ListingItem;
