import React from "react";
import FlowChart from "./components/FlowChart";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import Container from "./components/Container";
// import DragNDropList from "./components/DragNDropList";

function App() {
  return (
    <div className="App">
      <FlowChart />
    </div>
    // <DndProvider backend={HTML5Backend}>
    //   <div className="app-wrapper">
    //     <DragNDropList />
    //     <Container />
    //   </div>
    // </DndProvider>
  );
}

export default App;
