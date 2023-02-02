import { settings } from "./settings";

export function playMain() {
  const c = document.getElementById("main-board") as HTMLCanvasElement;
  document.body.style.backgroundColor = settings.boardColour.get();

  const dpi = 5;
  const w = c.width;
  c.width *= dpi;
  c.height = c.width;
  let ctx = c.getContext("2d")!;
  ctx.scale(dpi, dpi);

  const boardMargin = 0.5;
  const boardSize = 15;
  const boxSize = w / (boardMargin * 2 + boardSize - 1);
  ctx.lineWidth = boxSize / 20;
  let conv = (x: number) => (x - 1 + boardMargin) * boxSize;
  let drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    ctx.moveTo(conv(x1), conv(y1));
    ctx.lineTo(conv(x2), conv(y2));
  };
  ctx.beginPath();
  for (let i = 1; i <= boardSize; ++i) {
    drawLine(i, 1, i, boardSize);
    drawLine(1, i, boardSize, i);
  }
  ctx.stroke();

  const player1Info = document.getElementById("player1-info")!;
  const player2Info = document.getElementById("player2-info")!;
  player1Info.style.color = settings.blackPieceColour.get();
  player2Info.style.color = settings.whitePieceColour.get();
}
