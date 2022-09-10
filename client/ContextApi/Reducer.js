export default function Reducer(state, action) {
    switch (action.type) {
        case 'NEW_SEARCH':
            return action.payload
        case 'RESET_SEARCH':
            return {
                city: undefined,
                dates: [],
                options: {
                    adult: undefined,
                    children: undefined,
                    rooms: undefined
                }
            }
        default: 
            return state;
    }
} 