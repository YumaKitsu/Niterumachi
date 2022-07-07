import React, { createContext, useState, ReactNode } from "react";
import { SelectChangeEvent } from "@mui/material";




interface QueryPref {
  prefOfOrigin: string;
  cityOfOrigin: string;
  currentPref: string;
}

interface SearchContextObj {
  searchPref: QueryPref;
  selectPref: (e: SelectChangeEvent<string>) => void;
  initializeSelectedData: () => void;
}

interface Props {
  children: ReactNode;
}

const SearchContext = createContext<SearchContextObj>({
  searchPref: {
    prefOfOrigin: "",
    cityOfOrigin: "",
    currentPref: "",
  },
  selectPref: (e: SelectChangeEvent<string>) => {},
  initializeSelectedData: () => {}
});

export const ContextProvider = (props: Props) => {
  const [searchPref, setSearchPref] = useState<QueryPref>({
    prefOfOrigin: "",
    cityOfOrigin: "",
    currentPref: "",
  });

  const selectPref = (e: SelectChangeEvent<string>) => {
      const { name, value } = e.target;
       
        setSearchPref((previousData) => {
          return { ...previousData, [name]: value};
        });
      } 
    
  

  const initializeSelectedData = () => {
    setSearchPref({
      prefOfOrigin: "",
      cityOfOrigin: "",
      currentPref: "",
    }, )
  }

  return (
    <SearchContext.Provider value={{ searchPref, selectPref, initializeSelectedData }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
