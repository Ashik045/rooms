/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { ContextProvider } from '../ContextApi/Context';
import { UserContext } from '../ContextUser/Contexts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, [])

    if (!showChild) {
        return true;
    }

        return (
            <UserContext>
                <ContextProvider>
                    <Component {...pageProps} />
                </ContextProvider>
            </UserContext>
        );
}

export default MyApp;
