import { useCartContext } from 'modules/cart';
import { Card } from 'modules/data-display/card';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import css from './CheckoutPage.module.scss';
import { PriceFormatter } from 'modules/data-display/price-formatter';
import { Button, ButtonSize } from 'modules/input/button';

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
                        </div>
                        <div className={css['pricing']}>
                            <PriceFormatter
                                price={item.quantity * item.item.price}
                            >
                                {(formattedPrice) => <p>{formattedPrice}</p>}
                            </PriceFormatter>
                        </div>
                    </div>
                </Card>
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
