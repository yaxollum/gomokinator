export const boardSize = 15;

type Player = "P1" | "P2";
type GameResult = Player | "tie";

interface GameOver {
  state: "over";
  result: GameResult;
}

interface GameOngoing {
  state: "ongoing";
  board: (Player | null)[][];
  turn: Player;
}

type Game = GameOver | GameOngoing;

export function newGame(): GameOngoing {
  let board: null[][] = [];
  for (let i = 1; i <= boardSize; ++i) {
    board[i] = [];
    for (let j = 1; j <= boardSize; ++j) {
      board[i][j] = null;
    }
  }
  return { state: "ongoing", board, turn: "P1" };
}

function checkWinner(g: GameOngoing): GameResult | null {
  return null;
}
