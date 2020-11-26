import React, { memo, useContext, useState } from "react";
import { Handle } from "react-flow-renderer";
import { v4 as uuidv4 } from "uuid";
import { FlowElementsContext } from "./FlowElementsContext";
import { CurrentElementContext } from "./CurrentElementContext";

export default memo(() => {
  const [elements, setElements] = useContext(FlowElementsContext);
  const [elementData, setElementData] = useContext(CurrentElementContext);
  const [buttonTrigger, setButtonTrigger] = useState(true);
  const [buttonList, setButtonList] = useState(false);

  return (
    <>
      <>
        <Handle type="target" position="top" />
        <div>Delay Node</div>
        <Handle
          type="source"
          position="bottom"
          style={{ background: "#555" }}
        />
      </>
      <div>
        {buttonTrigger && (
          <button
            style={{ position: "absolute", left: "45px" }}
            onClick={() => {
              setButtonTrigger(false);
              setButtonList(!buttonList);
            }}
          >
            +
          </button>
        )}
        {buttonList && (
          <>
            <button
              style={{ position: "absolute", bottom: "-15px", left: "30px" }}
              onClick={() => {
                const id = uuidv4();
                setButtonList(!buttonList);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "emailNode",
                    position: {
                      x: elementData.position.x,
                      y: elementData.position.y + 100,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    sourceHandle: "a",
                    type: "straight",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Email
            </button>

            <button
              style={{ position: "absolute", bottom: "-40px", left: "25px" }}
              onClick={() => {
                const id = uuidv4();
                setButtonList(!buttonList);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "triggerNode",
                    position: {
                      x: elementData.position.x - 4,
                      y: elementData.position.y + 100,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    type: "straight",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Trigger
            </button>

            <button
              style={{ position: "absolute", bottom: "-65px", left: "30px" }}
              onClick={() => {
                const _id = uuidv4();
                setButtonList(!buttonList);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id: _id,
                    type: "delayNode",
                    position: {
                      x: elementData.position.x,
                      y: elementData.position.y + 100,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: _id,
                    sourceHandle: "b",
                    type: "straight",
                    arrowHeadType: "arrowclosed",
                  },
                ]);
              }}
            >
              Delay
            </button>

            <button
              style={{ position: "absolute", bottom: "-90px", left: "30px" }}
              onClick={() => {
                const id = uuidv4();
                setButtonList(!buttonList);
                console.log(elementData);
                setElements([
                  ...elements,
                  {
                    id,
                    type: "goalNode",
                    position: {
                      x: elementData.position.x + 4,
                      y: elementData.position.y + 100,
                    },
                    style: { border: "1px solid #777", padding: 20 },
                  },
                  {
                    id: uuidv4(),
                    source: elementData.id,
                    target: id,
                    type: "straight",
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
