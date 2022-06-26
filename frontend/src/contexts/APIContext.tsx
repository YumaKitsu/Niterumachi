import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  useCallback,
} from "react";
import SearchContext from "../contexts/SearchContext";
import PrefData from "../models/prefData";
import ResponseData from "../models/responseData";

interface APIContextObj {
  allData: PrefData[];
  results: PrefData[];
  getResults: (cluster?: number, prefecture?: string) => void;
  getClusterOfPref: () => number | undefined;
  initializeFetchedData: () => void;
}

interface Props {
  children: ReactNode;
}

const APIContext = createContext<APIContextObj>({
  allData: [],
  results: [],
  getResults: () => {},
  getClusterOfPref: () => undefined,
  initializeFetchedData: () => {},
});

export const APIContextProvider = (props: Props) => {
  const { searchPref } = useContext(SearchContext);
  const [allData, setAllData] = useState<PrefData[]>([]);
  const [results, setResults] = useState<PrefData[]>([]);

  async function getResults(cluster?: number, prefecture?: string) {
    if (prefecture && (cluster === 0 || cluster)) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/results/?pref=${prefecture}&cluster=${cluster}`
      );
      const data: ResponseData = await response.json();
      setResults(data.results);
    } else if (cluster === 0 || cluster) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/results/?cluster=${cluster}`
      );
      const data: ResponseData = await response.json();
      setResults(data.results);
    } else if (searchPref.prefOfOrigin && searchPref.cityOfOrigin) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/results/?city=${searchPref.cityOfOrigin}`
      );
      const data: ResponseData = await response.json();
      setResults(data.results);
    } else {
      
      const response = await fetch("http://127.0.0.1:8000/api/results");
      const data: ResponseData = await response.json();
      setAllData(data.results);
    }
  }

  const getClusterOfPref = useCallback(() => {
    
    const filterPrefObj = (obj: PrefData) => {

      if (Object.values(obj)[1] === searchPref.prefOfOrigin) {
  
        if (Object.values(obj)[2] + Object.values(obj)[3]  === searchPref.cityOfOrigin) {
          console.log(searchPref.prefOfOrigin, searchPref.cityOfOrigin);
          return true;
        } else if (Object.values(obj)[2] === searchPref.cityOfOrigin) {
          return true
        }
      }
      return false;
    };
    let hometown = allData.filter(filterPrefObj);
    let cluster = hometown[0].cluster;
    return cluster;
  }, [searchPref.prefOfOrigin, searchPref.currentPref]);

  const initializeFetchedData = () => {
    setResults([]);
    setAllData([]);
  };

  return (
    <APIContext.Provider
      value={{
        allData,
        results,
        getResults,
        getClusterOfPref,
        initializeFetchedData,
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
};

export default APIContext;
