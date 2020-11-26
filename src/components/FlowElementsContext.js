import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const FlowElementsContext = createContext();

export const FlowElementsProvider = (props) => {
  const [elements, setElements] = useState([
    {
      id: uuidv4(),
      type: "startNode",
      position: { x: 600, y: 25 },
      style: { border: "1px solid #777", padding: 20 },
    },
  ]);

  return (
    <FlowElementsContext.Provider value={[elements, setElements]}>
      {props.children}
    </FlowElementsContext.Provider>
  );
};
