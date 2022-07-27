import React, {
  useState,
  createContext,
  ReactNode,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import SearchContext from "./SearchContext";
import PrefData from "../models/prefData";

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
      await axios.get(
        `https://www.niterumachi.com/api/results/?pref=${prefecture}&cluster=${cluster}`
      ).then((res) => setResults(res.data.results))
    } else if (cluster === 0 || cluster) {
        await axios.get(
        `https://www.niterumachi.com/api/results/?cluster=${cluster}`
      ).then((res) => setResults(res.data.results))
    } else if (searchPref.prefOfOrigin && searchPref.cityOfOrigin) {
       await axios.get(
        `https://www.niterumachi.com/api/results/?city=${searchPref.cityOfOrigin}`
      ).then((res) => setResults(res.data.results))
    } else {
      await axios.get("https://www.niterumachi.com/api/results").then((res) => setAllData(res.data.results))
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
