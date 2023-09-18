import { FC, ReactElement } from 'react';

import Header from './components/header/Header';

import css from './PageLayout.module.scss';

type PageLayoutProps = {
    children: ReactElement | ReactElement[];
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => (
    <>
        <Header />
        <div className={css['content']}>{children}</div>
    </>
);

export default PageLayout;
