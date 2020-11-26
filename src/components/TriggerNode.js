import React, { memo, useContext, useState } from "react";
import { Handle } from "react-flow-renderer";
import { v4 as uuidv4 } from "uuid";
import { FlowElementsContext } from "./FlowElementsContext";
import { CurrentElementContext } from "./CurrentElementContext";

export default memo(() => {
  const [elements, setElements] = useContext(FlowElementsContext);
  const [elementData, setElementData] = useContext(CurrentElementContext);
  const [button1Trigger, setButton1Trigger] = useState(true);
  const [button2Trigger, setButton2Trigger] = useState(true);
  const [button1List, setButton1List] = useState(false);
  const [button2List, setButton2List] = useState(false);

  return (
    <>
      <>
        <Handle type="target" position="top" />
        <div>Trigger Node</div>
        <br />
        <div>
          <span style={{ left: 10 }}>Yes</span>
          <span style={{ marginLeft: 35 }}>No</span>
        </div>
        <Handle
          type="source"
          position="bottom"
          id="a"
          style={{ left: 15, background: "#555" }}
        />
        <Handle
          type="source"
          position="bottom"
          id="b"
          style={{ right: 10, left: "auto", background: "#555" }}
        />
      </>
      <div>
        {button1Trigger && (
          <button
            style={{ position: "absolute", left: "8px" }}
            onClick={() => {
              setButton1Trigger(false);
              setButton1List(!button1List);
            }}
          >
            +
          </button>
        )}
        {button1List && (
          <>
            <button
              style={{ position: "absolute", bottom: "-15px", left: "5px" }}
              onClick={() => {
                const id = uuidv4();
                setButton1List(!button1List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "emailNode",
                    position: {
                      x: elementData.position.x - 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    sourceHandle: "a",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Email
            </button>

            <button
              style={{ position: "absolute", bottom: "-40px", left: "2px" }}
              onClick={() => {
                const id = uuidv4();
                setButton1List(!button1List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "triggerNode",
                    position: {
                      x: elementData.position.x - 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    sourceHandle: "a",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Trigger
            </button>

            <button
              style={{ position: "absolute", bottom: "-65px", left: "5px" }}
              onClick={() => {
                const _id = uuidv4();
                setButton1List(!button1List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id: _id,
                    type: "delayNode",
                    position: {
                      x: elementData.position.x - 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: _id,
                    sourceHandle: "a",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Delay
            </button>

            <button
              style={{ position: "absolute", bottom: "-90px", left: "5px" }}
              onClick={() => {
                const id = uuidv4();
                setButton1List(!button1List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "goalNode",
                    position: {
                      x: elementData.position.x - 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    sourceHandle: "a",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Goal
            </button>
          </>
        )}

        {button2Trigger && (
          <button
            style={{ position: "absolute", right: "8px" }}
            onClick={() => {
              setButton2Trigger(false);
              setButton2List(!button2List);
            }}
          >
            +
          </button>
        )}
        {button2List && (
          <>
            <button
              style={{ position: "absolute", bottom: "-15px", right: "5px" }}
              onClick={() => {
                const id = uuidv4();
                setButton2List(!button2List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "emailNode",
                    position: {
                      x: elementData.position.x + 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    sourceHandle: "b",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Email
            </button>

            <button
              style={{ position: "absolute", bottom: "-40px", right: "2px" }}
              onClick={() => {
                const id = uuidv4();
                setButton2List(!button2List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "triggerNode",
                    position: {
                      x: elementData.position.x + 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    sourceHandle: "b",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Trigger
            </button>

            <button
              style={{ position: "absolute", bottom: "-65px", right: "5px" }}
              onClick={() => {
                const _id = uuidv4();
                setButton2List(!button2List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id: _id,
                    type: "delayNode",
                    position: {
                      x: elementData.position.x + 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: _id,
                    sourceHandle: "b",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Delay
            </button>

            <button
              style={{ position: "absolute", bottom: "-90px", right: "5px" }}
              onClick={() => {
                const id = uuidv4();
                setButton2List(!button2List);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "goalNode",
                    position: {
                      x: elementData.position.x + 150,
                      y: elementData.position.y + 130,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    sourceHandle: "b",
                    type: "smoothstep",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Goal
            </button>
          </>
        )}
      </div>
    </>
  );
});
