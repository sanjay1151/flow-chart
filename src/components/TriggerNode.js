import React, { memo } from "react";
import { Handle } from "react-flow-renderer";

export default memo(() => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        onConnect={(params) => console.log("handle onConnect", params)}
      />
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
        style={{ left: 10, background: "#555" }}
      />
      <Handle
        type="source"
        position="bottom"
        id="b"
        style={{ right: 10, left: "auto", background: "#555" }}
      />
    </>
  );
});
