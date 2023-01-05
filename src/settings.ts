export class Setting {
  constructor(
    private readonly def: string,
    private readonly storageKey: string
  ) {}
  public get(): string {
    return localStorage.getItem(this.storageKey) ?? this.def;
  }
  public set(value: string): void {
    localStorage.setItem(this.storageKey, value);
  }
  public clear(): void {
    localStorage.removeItem(this.storageKey);
  }
}

export const settings = {
  boardColour: new Setting("#F6CD73", "board-colour"),
  lineColour: new Setting("#505050", "line-colour"),
  blackPieceColour: new Setting("#000000", "black-piece-colour"),
  whitePieceColour: new Setting("#EEEEEE", "white-piece-colour"),
};
