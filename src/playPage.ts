import { settings } from "./settings";
import { boardSize, newGame } from "./game";

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
  const boxSize = w / (boardMargin * 2 + boardSize - 1);
  ctx.lineWidth = boxSize / 20;
  let conv = (x: number) => (x - 1 + boardMargin) * boxSize;
  let revConv = (x: number) =>
    Math.min(boardSize, Math.max(1, Math.round(x / boxSize - boardMargin + 1)));
  let drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    ctx.moveTo(conv(x1), conv(y1));
    ctx.lineTo(conv(x2), conv(y2));
  };
  let game = newGame();
  let drawBoard = () => {
    ctx.clearRect(0, 0, w, w);
    ctx.beginPath();
    for (let i = 1; i <= boardSize; ++i) {
      drawLine(i, 1, i, boardSize);
      drawLine(1, i, boardSize, i);
    }
    ctx.stroke();
  };

  let handleMouseMove = (ev: MouseEvent) => {
    drawBoard();
    let rect = c.getBoundingClientRect();
    let x = revConv(((ev.clientX - rect.left) / c.clientWidth) * w);
    let y = revConv(((ev.clientY - rect.top) / c.clientHeight) * w);
    ctx.beginPath();
    ctx.arc(conv(x), conv(y), boxSize / 2.5, 0, 2 * Math.PI, false);

    ctx.save();
    ctx.fillStyle = settings.whitePieceColour.get();
    ctx.globalAlpha = 0.5;
    ctx.fill();
    ctx.restore();
  };
  c.addEventListener("mousemove", handleMouseMove);

  const player1Info = document.getElementById("player1-info")!;
  const player2Info = document.getElementById("player2-info")!;
  player1Info.style.color = settings.blackPieceColour.get();
  player2Info.style.color = settings.whitePieceColour.get();
}
