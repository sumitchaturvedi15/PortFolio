import React from "react";
const Particle = React.memo(() => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(to bottom, #021E35 0%, #01203A 25%, #011A33 50%, #010F25 75%, #00080F 100%)",
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      
    </div>
  );
});

export default Particle;