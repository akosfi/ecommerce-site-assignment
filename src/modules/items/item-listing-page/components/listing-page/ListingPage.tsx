import { Item } from 'modules/items';
import { FC } from 'react';

import css from './ListingPage.module.scss';
import ListingItem from './components/listing-item/ListingItem';
import { CartOverlay } from 'modules/cart/cart-overlay';

type ListingPageProps = {
    items: Item[];
};

const ListingPage: FC<ListingPageProps> = ({ items }) => (
    <>
        <nav className={css['header']}>
            <span />
            <p className={css['title']}>Hallo world</p>
            <div>
                <CartOverlay />
            </div>
        </nav>
        <section className={css['list']}>
            <h1 className={css['shopName']}>
                Fingertips
                <br />
                Store
            </h1>
            <div className={css['items']}>
                {items.map((item) => (
                    <ListingItem item={item} />
                ))}
            </div>
        </section>
    </>
);

export default ListingPage;
