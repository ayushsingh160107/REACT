import { createContext } from 'react';

export const GlobalContext = createContext({
    theme: "light",
    user: null,
    lang: "en"
});