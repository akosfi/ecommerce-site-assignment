import { FC } from 'react';
import { CartOverlay } from 'modules/cart/cart-overlay';
import { useRouter } from 'next/router';

import css from './Header.module.scss';

const Header: FC = () => {
    const { push } = useRouter();

    return (
        <nav className={css['navigation']}>
            <span />
            <p className={css['title']} onClick={() => push('/')}>
                Hallo world
            </p>
            <div>
                <CartOverlay />
            </div>
        </nav>
    );
};

export default Header;
