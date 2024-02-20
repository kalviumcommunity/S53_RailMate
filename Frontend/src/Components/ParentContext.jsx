import React, { createContext, useState } from 'react';


export const AppContext = createContext();


const ParentContext = ({ children }) => {

  const [islogin, setislogin] = useState(false);


  return (
    <AppContext.Provider value={{ islogin, setislogin }}>
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
