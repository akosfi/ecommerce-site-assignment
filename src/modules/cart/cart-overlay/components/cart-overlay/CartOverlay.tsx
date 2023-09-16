import { FC, useEffect, useState } from 'react';
import { useCartContext } from 'modules/cart';
import Separator, { SeparatorVariant } from './components/separator/Separator';
import { Button } from 'modules/input/button';
import { ButtonSize } from 'modules/input/button/Button';
import { PriceFormatter } from 'modules/data-display/price-formatter';
import { useRouter } from 'next/router';

import css from './CartOverlay.module.scss';

const CartOverlay: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { cart, totalItemQuantity, totalPrice } = useCartContext();

    const { push } = useRouter();

    useEffect(() => {
        if (cart.items.length) {
            setIsOpen(true);
        }
    }, [setIsOpen, cart.items]);

    const toggleCartOverlay = () => {
        if (cart.items.length) {
            setIsOpen(!isOpen);
        }
    };

    const itemNumberForBadge = totalItemQuantity > 9 ? '9+' : totalItemQuantity;

    const navigateToCheckout = () => {
        setIsOpen(false);
        push('/checkout');
    };

    return (
        <div className={css['content']}>
            <div className={css['button']} onClick={toggleCartOverlay}>
                <div className={css['icon']}>
                    <img src="/assets/cart.svg" />
                    <span className={css['badge']}>{itemNumberForBadge}</span>
                </div>
                <span className={css['label']}>Shopping cart</span>
            </div>
            {isOpen && (
                <div className={css['overlay']}>
                    <p className={css['title']}>
                        You have {totalItemQuantity} items in your cart!
                    </p>
                    <Separator variant={SeparatorVariant.NORMAL} />
                    <table>
                        <colgroup>
                            <col style={{ width: '40%' }} />
                            <col style={{ width: '20%' }} />
                            <col style={{ width: '20%' }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Units</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cart.items.map(({ item, quantity }) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{quantity}</td>
                                    <PriceFormatter
                                        price={quantity * item.price}
                                    >
                                        {(formattedPrice) => (
                                            <td>{formattedPrice}</td>
                                        )}
                                    </PriceFormatter>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Separator variant={SeparatorVariant.BOLD} />
                    <div className={css['total']}>
                        <p>Total Order Value</p>

                        <PriceFormatter price={totalPrice}>
                            {(formattedPrice) => <p>{formattedPrice}</p>}
                        </PriceFormatter>
                    </div>
                    <Separator variant={SeparatorVariant.NORMAL} />
                    <Button
                        size={ButtonSize.SMALL}
                        label="Checkout"
                        onClick={navigateToCheckout}
                    />
                </div>
            )}
        </div>
    );
};

export default CartOverlay;
