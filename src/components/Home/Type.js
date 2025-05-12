import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Competitive Programmer",
          "Full Stack Developer",
          // "Problem Solver",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
