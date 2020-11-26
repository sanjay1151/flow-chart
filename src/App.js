import React from "react";
import FlowChart from "./components/FlowChart";
import { FlowElementsProvider } from "./components/FlowElementsContext";
import { CurrentElementProvider } from "./components/CurrentElementContext";

function App() {
  return (
    <FlowElementsProvider>
      <CurrentElementProvider>
        <div className="App">
          <FlowChart />
        </div>
      </CurrentElementProvider>
    </FlowElementsProvider>
  );
}

export default App;
