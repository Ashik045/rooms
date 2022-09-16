/* eslint-disable react/jsx-props-no-spreading */
import { ContextProvider } from '../ContextApi/Context';
import { UserContext } from '../ContextUser/Contexts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <UserContext>
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        </UserContext>
    );
}

export default MyApp;
