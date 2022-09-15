import React, { useReducer } from "react"
import Reducer from "./Reducer"

const initial_state = {
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        rooms: undefined
    }
}

export const Context = React.createContext(initial_state)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initial_state)

    return (
        <Context.Provider value={{
            city: state.city,
            dates: state.date,
            options: state.options,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    )
}