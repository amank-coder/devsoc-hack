import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({children}) => {
    const [lang, setLang] = useState();

    return (
        <Context.Provider
            value={{
                lang,
                setLang
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
