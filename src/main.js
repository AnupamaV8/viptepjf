import "./style.css";
import chalk from "chalk";
import { tsParticles } from "@tsparticles/engine";
import { loadColorUpdater } from "@tsparticles/updater-color";
import confetti from "canvas-confetti";

document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("particles", {
    preset: "fireworks",
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
  });

  const message = `
   <span style="color: green;">
     I am a green line 
     <span style="color: blue; text-decoration: underline; font-weight: bold;">
       with a blue substring
     </span>
     that becomes green again!
   </span>
 `;

  const outputElement = document.getElementById("output");
  if (outputElement) {
    outputElement.innerHTML = message;
  }

  console.log(
    chalk.green(
      "I am a green line " +
        chalk.blue.underline.bold("with a blue substring") +
        " that becomes green again!"
    )
  );

  var triangle = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" });

  confetti({
    shapes: [triangle],
  });
});

(async () => {
  await loadColorUpdater(tsParticles);
})();
