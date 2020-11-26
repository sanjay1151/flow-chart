import React, { useContext } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import { FlowElementsContext } from "./FlowElementsContext";
import { CurrentElementContext } from "./CurrentElementContext";
import TriggerNode from "./TriggerNode";
import StartNode from "./StartNode";
import EmailNode from "./EmailNode";
import DelayNode from "./DelayNode";
import GoalNode from "./GoalNode";

const nodeTypes = {
  triggerNode: TriggerNode,
  startNode: StartNode,
  emailNode: EmailNode,
  delayNode: DelayNode,
  goalNode: GoalNode,
};

const FlowChart = () => {
  const [elements, setElements] = useContext(FlowElementsContext);
  const [elementData, setElementData] = useContext(CurrentElementContext);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (event, element) => {
    setElementData(element);
    console.log(element);
  };
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          nodesDraggable={false}
          nodeTypes={nodeTypes}
          zoomOnDoubleClick={false}
          panOnScroll={false}
          onElementClick={onElementClick}
        />
      </div>
    </>
  );
};

export default FlowChart;
