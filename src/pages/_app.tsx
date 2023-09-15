import { CartProvider } from 'modules/cart';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}
