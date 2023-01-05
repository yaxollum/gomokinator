import * as PIXI from "pixi.js";
function pixi() {
  //Create a Pixi Application
  const app = new PIXI.Application({
    width: 256,
    height: 256,
    autoDensity: true,
  });

  //Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view as HTMLCanvasElement);
}

function rememberInput(name: string, restoreDefault: string, def: string) {
  const inputElement = document.getElementById(name) as HTMLInputElement;
  inputElement.value = localStorage.getItem(name) ?? def;
  inputElement.addEventListener("input", () => {
    localStorage.setItem(name, inputElement.value);
  });
  const restoreDefaultButton = document.getElementById(
    restoreDefault
  ) as HTMLButtonElement;
  restoreDefaultButton.onclick = () => {
    inputElement.value = def;
    localStorage.removeItem(name);
  };
}
(window as any).mainPage = function () {
  rememberInput("board-colour", "board-colour-restore", "#F6CD73");
  rememberInput("line-colour", "line-colour-restore", "#505050");
  rememberInput("black-piece-colour", "black-piece-colour-restore", "#000000");
  rememberInput("white-piece-colour", "white-piece-colour-restore", "#EEEEEE");
};
