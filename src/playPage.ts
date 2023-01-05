import * as PIXI from "pixi.js";
import { settings } from "./settings";
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

export function playMain() {
  const boardContainer = document.getElementById("main-board")!;
  const app = new PIXI.Application({
    resizeTo: boardContainer,
    backgroundAlpha: 0,
  });
  boardContainer.appendChild(app.view as HTMLCanvasElement);
  document.body.style.backgroundColor = settings.boardColour.get();

  const player1Info = document.getElementById("player1-info")!;
  const player2Info = document.getElementById("player2-info")!;
  player1Info.style.color = settings.blackPieceColour.get();
  player2Info.style.color = settings.whitePieceColour.get();
}
