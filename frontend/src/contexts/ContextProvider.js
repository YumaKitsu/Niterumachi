import { createContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [searchPref, setSearchPref] = useState({
        prefOfOrigin: '',
        cityOfOrigin: '',
        currentPref: '',
    });

    const [prefData, setPrefData] = useState([]);
    const [results, setResults] = useState([]);

    const [queryPref, setQueryPref] = useState([]);
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setSearchPref((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    return (
        <StateContext.Provider value={{ searchPref, setSearchPref, prefData, setPrefData, changeHandler, results, setResults, queryPref, setQueryPref }}>
            {children}
        </StateContext.Provider>
    )
};

export default StateContext;