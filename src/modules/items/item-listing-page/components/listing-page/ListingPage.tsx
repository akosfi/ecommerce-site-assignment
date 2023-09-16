import { Item } from 'modules/items';
import { FC } from 'react';

import ListingItem from './components/listing-item/ListingItem';

import css from './ListingPage.module.scss';

type ListingPageProps = {
    items: Item[];
};

const ListingPage: FC<ListingPageProps> = ({ items }) => (
    <>
        <h1 className={css['shopName']}>
            Fingertips
            <br />
            Store
        </h1>
        <div className={css['items']}>
            {items.map((item) => (
                <ListingItem item={item} key={item.id} />
            ))}
        </div>
    </>
);

export default ListingPage;
