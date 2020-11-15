import React, { useState } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import TriggerNode from "./TriggerNode";
import { v4 as uuidv4 } from "uuid";

const nodeTypes = {
  triggerNode: TriggerNode,
};

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 25 },
  },
];

const FlowChart = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onNodeDragStart = (event, node) => console.log("drag start", node);
  return (
    <div style={{ height: 900 }}>
      {/*<div>*/}
      {/*  <button*/}
      {/*    onMouseDown={() => {*/}
      {/*      // console.log(e.offsetX);*/}
      {/*      setElements([*/}
      {/*        ...elements,*/}
      {/*        {*/}
      {/*          id: uuidv4(),*/}
      {/*          type: "input",*/}
      {/*          data: { label: "Start" },*/}
      {/*          position: { x: 500, y: 250 },*/}
      {/*        },*/}
      {/*        // start[0].position.x = e.offsetX;*/}
      {/*        // start[0].position.y = e.offsetY;*/}
      {/*      ]);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Start*/}
      {/*  </button>*/}
      {/*</div>*/}

      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46}
        nodeTypes={nodeTypes}
        paneMoveable={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        onNodeDragStart={onNodeDragStart}
      >
        <div style={{ position: "absolute", left: 500, top: 500, zIndex: 4 }}>
          <div>
            <button
              onMouseDown={(e) => {
                console.log(e.clientX);
                console.log(e.clientY);
                console.log(elements);
                setElements([
                  ...elements,
                  {
                    id: uuidv4(),
                    type: "input",
                    data: { label: "Start" },
                    position: { x: e.clientX - 80, y: e.clientY - 35 },
                  },
                ]);
              }}
              // onClick={(e) => {
              //   onN;
              // }}
            >
              Start
            </button>
          </div>

          {/*<div>*/}
          {/*  <button*/}
          {/*    onMouseDown={() => {*/}
          {/*      setElements([*/}
          {/*        ...elements,*/}
          {/*        {*/}
          {/*          id: uuidv4(),*/}
          {/*          data: { label: <div>Email</div> },*/}
          {/*          position: { x: 300, y: 125 },*/}
          {/*        },*/}
          {/*      ]);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Email*/}
          {/*  </button>*/}
          {/*</div>*/}

          {/*<div>*/}
          {/*  <button*/}
          {/*    onMouseDown={() => {*/}
          {/*      setElements([*/}
          {/*        ...elements,*/}
          {/*        {*/}
          {/*          id: uuidv4(),*/}
          {/*          data: { label: <div>Delay</div> },*/}
          {/*          position: { x: 100, y: 125 },*/}
          {/*        },*/}
          {/*      ]);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Delay*/}
          {/*  </button>*/}
          {/*</div>*/}

          {/*<div>*/}
          {/*  <button*/}
          {/*    onMouseDown={() => {*/}
          {/*      setElements([*/}
          {/*        ...elements,*/}
          {/*        {*/}
          {/*          id: uuidv4(),*/}
          {/*          type: "triggerNode",*/}
          {/*          position: { x: 150, y: 200 },*/}
          {/*          style: { border: "1px solid #777", padding: 20 },*/}
          {/*        },*/}
          {/*      ]);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Trigger*/}
          {/*  </button>*/}
          {/*</div>*/}

          {/*<div>*/}
          {/*  <button*/}
          {/*    onMouseDown={() => {*/}
          {/*      setElements([*/}
          {/*        ...elements,*/}
          {/*        {*/}
          {/*          id: uuidv4(),*/}
          {/*          type: "output",*/}
          {/*          data: { label: "Goal" },*/}
          {/*          position: { x: 250, y: 300 },*/}
          {/*        },*/}
          {/*      ]);*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Goal*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
