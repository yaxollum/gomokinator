import { settings, Setting } from "./settings";

function rememberInput(name: string, restoreDefault: string, setting: Setting) {
  const inputElement = document.getElementById(name) as HTMLInputElement;
  inputElement.value = setting.get();
  inputElement.addEventListener("input", () => {
    setting.set(inputElement.value);
  });
  const restoreDefaultButton = document.getElementById(
    restoreDefault
  ) as HTMLButtonElement;
  restoreDefaultButton.onclick = () => {
    setting.clear();
    inputElement.value = setting.get();
  };
}
export function indexMain() {
  rememberInput("board-colour", "board-colour-restore", settings.boardColour);
  rememberInput("line-colour", "line-colour-restore", settings.lineColour);
  rememberInput(
    "black-piece-colour",
    "black-piece-colour-restore",
    settings.blackPieceColour
  );
  rememberInput(
    "white-piece-colour",
    "white-piece-colour-restore",
    settings.whitePieceColour
  );
  const playButton = document.getElementById("play") as HTMLButtonElement;
  playButton.onclick = () => {
    location.href = "play";
  };
}
