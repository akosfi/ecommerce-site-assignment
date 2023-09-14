import { useCartContext } from 'modules/cart';
import { AddToCartButton } from 'modules/cart/add-to-cart-button';
import { Item } from 'modules/items';
import { FC } from 'react';

type ListingPageProps = {
    items: Item[];
};

const ListingPage: FC<ListingPageProps> = ({ items }) => {
    const context = useCartContext();
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <AddToCartButton item={item} />
                </div>
            ))}
            {JSON.stringify(context.cart.items)}
        </div>
    );
};

export default ListingPage;
