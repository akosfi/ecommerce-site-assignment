import { useCartContext } from 'modules/cart';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import { PriceFormatter } from 'modules/data-display/price-formatter';
import { Button, ButtonSize } from 'modules/input/button';
import CheckoutListItem from './components/checkout-list-item/CheckoutListItem';

import css from './CheckoutPage.module.scss';

const CheckoutPage: FC = () => {
    const { replace } = useRouter();
    const { cart, totalPrice } = useCartContext();

    useEffect(() => {
        if (!cart.items.length) {
            replace('/');
        }
    }, [cart.items.length, replace]);

    return (
        <div className={css['content']}>
            {cart.items.map((item) => (
                <CheckoutListItem item={item} key={item.item.id} />
            ))}

            <div className={css['total-price']}>
                <p>Total Order Value</p>
                <PriceFormatter price={totalPrice}>
                    {(formattedPrice) => <p>{formattedPrice}</p>}
                </PriceFormatter>
            </div>

            <div className={css['button-container']}>
                <Button
                    size={ButtonSize.SMALL}
                    label="Go to Payment"
                    onClick={() => null}
                    className={css['button']}
                />
            </div>
        </div>
    );
};

export default CheckoutPage;
