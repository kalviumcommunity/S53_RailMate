import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ParentContext = ({children}) => {
  const [update,setUpdate]=useState(false);
  const [login,setlogin]= useState(false)
  return <AppContext.Provider value={{login,setlogin,update,setUpdate}}>
    {children}
    
  </AppContext.Provider>
}

export default  ParentContext