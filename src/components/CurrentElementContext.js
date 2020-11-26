import React, { useState, createContext } from "react";

export const CurrentElementContext = createContext();

export const CurrentElementProvider = (props) => {
  const [elementData, setElementData] = useState([]);

  return (
    <CurrentElementContext.Provider value={[elementData, setElementData]}>
      {props.children}
    </CurrentElementContext.Provider>
  );
};
