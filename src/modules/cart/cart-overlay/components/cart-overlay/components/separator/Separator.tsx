import classNames from 'classnames';
import { FC } from 'react';

import css from './Separator.module.scss';

export enum SeparatorVariant {
    NORMAL = 'normal',
    BOLD = 'bold',
}

type SeparatorProps = {
    variant: SeparatorVariant;
};

const Separator: FC<SeparatorProps> = ({ variant }) => (
    <div
        className={classNames(css['separator'], css[`separator-${variant}`])}
    />
);

export default Separator;
