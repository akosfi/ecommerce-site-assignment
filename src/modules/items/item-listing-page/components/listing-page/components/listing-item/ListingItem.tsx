import { AddToCartButton } from 'modules/cart/add-to-cart-button';
import { Item } from 'modules/items';
import { FC } from 'react';

import css from './ListingItem.module.scss';
import ToolTip from './components/tooltip/Tooltip';
import { PriceFormatter } from 'modules/data-display/price-formatter';

type ListingItemProps = {
    item: Item;
};

const ListingItem: FC<ListingItemProps> = ({ item }) => (
    <div className={css['item']}>
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
    </div>
);

export default ListingItem;
