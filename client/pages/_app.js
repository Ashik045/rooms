/* eslint-disable react/jsx-props-no-spreading */
import { ContextProvider } from '../ContextApi/Context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
}

export default MyApp;
