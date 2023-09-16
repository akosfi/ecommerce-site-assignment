import { Card } from 'modules/data-display/card';
import { FC } from 'react';

import { PriceFormatter } from 'modules/data-display/price-formatter';
import { CartItem } from 'modules/cart';

import css from './CheckoutListItem.module.scss';

type CheckoutListItemProps = {
    item: CartItem;
};

const CheckoutListItem: FC<CheckoutListItemProps> = ({ item }) => (
    <Card className={css['card']} key={item.item.id}>
        <div className={css['item-image']}>
            <img src={item.item.imageSrc} alt="item image" />
        </div>
        <div className={css['item-information']}>
            <div className={css['item-details']}>
                <p>{item.item.name}</p>
                <p>
                    Units: <span>{item.quantity}</span>
                </p>

                <PriceFormatter price={item.item.price}>
                    {(formattedPrice) => (
                        <p>
                            Price: <span>{formattedPrice}</span>
                        </p>
                    )}
                </PriceFormatter>
            </div>
            <div className={css['pricing']}>
                <PriceFormatter price={item.quantity * item.item.price}>
                    {(formattedPrice) => <p>{formattedPrice}</p>}
                </PriceFormatter>
            </div>
        </div>
    </Card>
);

export default CheckoutListItem;
