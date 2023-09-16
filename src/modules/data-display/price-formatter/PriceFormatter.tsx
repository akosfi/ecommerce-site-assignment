import { FC, ReactElement, useMemo } from 'react';

type PriceFormatterProps = {
    price: number;
    children: (formattedPrice: string) => ReactElement | ReactElement[];
};

const PriceFormatter: FC<PriceFormatterProps> = ({ price, children }) => {
    const formattedPrice = useMemo(
        () =>
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(price),
        [price],
    );

    return children(formattedPrice);
};

export default PriceFormatter;
