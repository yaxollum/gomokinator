import * as PIXI from "pixi.js";
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}

console.log(type);
