import { Item } from 'modules/items';
import { FC } from 'react';

type ListingPageProps = {
    items: Item[];
};

const ListingPage: FC<ListingPageProps> = ({ items }) => (
    <div>
        {items.map((item) => (
            <div key={item.id}>{item.name}</div>
        ))}
    </div>
);

export default ListingPage;
