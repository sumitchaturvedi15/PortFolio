import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        background:
          "linear-gradient(to bottom, #021E35 0%, #01203A 25%, #011A33 50%, #010F25 75%, #00080F 100%)",
      }}
    >
      <Particles
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            shape: {
              type: "char",
              character: {
                value: ["🐟", "🦈"],
                font: "Verdana",
                style: "",
                weight: "400",
                fill: true,
              },
            },
            color: {
              value: ["#00B8A9", "#1D2D44"],
            },
            opacity: {
              value: 0.8,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: {
                enable: true,
                minimumValue: 5,
              },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "right",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
              },
              path: {
                enable: true,
                delay: {
                  value: 0.5,
                },
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default Particle;
