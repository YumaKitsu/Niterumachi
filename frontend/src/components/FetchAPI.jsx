import React, { useState } from "react";

const FetchAPI = () => {
  const [ prefData, setPrefData ] = useState({pref: '', city: ''});
  const [ searchPref, setSearchPref ] = useState('')

  const changeHandler = (e) => {

  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(`http://127.0.0.1:8000/api/result/?search=${searchPref}`);
    const data = await api.json();
    setPrefData(data.results);
  };

  return (
    <div>
      <form>
        <label>Search </label>
        <input 
          type="text" 
          value={searchPref} 
          onChange={}/>
          <button onClick={submitHandler}>検索</button>

      </form>

      {
        prefData.map((data, i) => <p key={i}>{data.prefecture} {data.city} -- {data.forest_area}ha {data.habitable_area}ha</p>)
      }
    </div>
  );
};

export default FetchAPI;
