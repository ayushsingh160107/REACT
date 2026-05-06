import { useReducer } from 'react';
import { GlobalContext } from './context';

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };

        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            };

        case "SET_LANG":
            return {
                ...state,
                lang: action.payload,
            };

        default:
            return state;
    }
}

const Appprovider = ({ children }) => {

    const initialState = {
        theme: "light",
        user: { name: "Guest" },
        lang: "en"
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Appprovider;