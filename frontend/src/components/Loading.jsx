import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import StateContext from "../contexts/ContextProvider";


const Loading = () => {
  const {isLoading} = useContext(StateContext);
  return (
    <div>
        {isLoading && <CircularProgress />}
    </div>
  )
}

export default Loading;