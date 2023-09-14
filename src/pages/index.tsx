import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import data from '../../data/items.json';
import { Item } from 'modules/items';
import { ListingPage as ListingPageContent } from 'modules/items/item-listing-page';

type ListingPageProps = {
    items: Item[];
};

const ListingPage = ({
    listingPageProps: { items },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
    <ListingPageContent items={items} />
);

export const getServerSideProps = (async () => {
    return { props: { listingPageProps: data } };
}) satisfies GetServerSideProps<{
    listingPageProps: ListingPageProps;
}>;

export default ListingPage;
