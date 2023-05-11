import React from 'react'
import GlobalContext from './UseContext';

const GlobalState = (props) => {
    const state = [
        'Sudeep', 'Sagar', 'Suresh', 'Bishwojit', 'Anisha', 'Naman', 'Manita', 'Suhan','Shrestha','Sabita','Binita'
    ]
  return (
    <GlobalContext.Provider value={state}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState;