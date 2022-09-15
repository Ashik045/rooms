export default function Reducer(state, action) {
    switch (action.type) {
        case 'NEW_SEARCH':
            return action.payload
        case 'RESET_SEARCH':
            return {
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
                }
            }
        case 'LOGIN_START':
            return {
                user: null,
                loading: true,
                error: false,
            }

        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                loading: false,
                error: false,
            }
        case 'LOGIN_FAILURE':
            return {
                user: null,
                loading: false,
                error: true,
            }
        case 'LOG_OUT':
            return {
                user: null,
                loading: false,
                error: false,
            }
        default: 
            return state;
    }
} 