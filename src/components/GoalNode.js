import React, { memo } from "react";
import { Handle } from "react-flow-renderer";

export default memo(() => {
  return (
    <>
      <>
        <Handle type="target" position="top" />
        <div>Goal Node</div>
      </>
    </>
  );
});
