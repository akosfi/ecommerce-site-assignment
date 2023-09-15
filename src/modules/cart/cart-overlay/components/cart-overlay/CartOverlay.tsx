import { FC, useEffect, useMemo, useState } from 'react';
import { useCartContext } from 'modules/cart';
import classNames from 'classnames';

import css from './CartOverlay.module.scss';
import Separator, { SeparatorVariant } from './components/separator/Separator';
import { Button } from 'modules/input/button';
import { ButtonSize } from 'modules/input/button/Button';
import { PriceFormatter } from 'modules/data-display/price-formatter';

const CartOverlay: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { cart } = useCartContext();

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

    const totalPrice = useMemo(
        () =>
            cart.items.reduce<number>(
                (totalAmount, { item, quantity }) =>
                    (totalAmount += item.price * quantity),
                0
            ),
        [cart.items]
    );

    const totalItemQuantity = useMemo(
        () =>
            cart.items.reduce<number>(
                (totalItemQuantity, { quantity }) =>
                    (totalItemQuantity += quantity),
                0
            ),
        [cart.items]
    );

    const itemNumberForBadge = totalItemQuantity > 9 ? '9+' : totalItemQuantity;

    return (
        <div className={css['content']}>
            <div className={css['button']} onClick={toggleCartOverlay}>
                <div className={css['icon']}>
                    <img src="/assets/cart.svg" />
                    <span className={css['badge']}>{itemNumberForBadge}</span>
                </div>
                <span>Shopping cart</span>
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
                        onClick={() => null}
                    />
                </div>
            )}
        </div>
    );
};

export default CartOverlay;
