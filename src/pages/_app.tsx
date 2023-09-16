import { CartProvider } from 'modules/cart';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { PageLayout } from 'modules/layout/page-layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Fingertips Store</title>
            </Head>
            <CartProvider>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </CartProvider>
        </>
    );
}
