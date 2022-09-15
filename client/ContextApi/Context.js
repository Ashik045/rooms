import React, { useEffect, useReducer } from "react"
import Reducer from "./Reducer"

const isServer = typeof window !== "undefined"

const initial_state = {
    city: undefined,
    dates: [
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ],
    options: {
        adult: 1,
        children: 0,
        rooms: 1
    },
    user: isServer && JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: false,
}

export const Context = React.createContext(initial_state)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initial_state);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user]);

    return (
        <Context.Provider value={{
            city: state.city,
            dates: state.dates,
            options: state.options,
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}