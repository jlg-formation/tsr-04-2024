import { Config } from "./interfaces/Config";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};

  constructor(private config: Config) {
    console.log("config: ", this.config);
  }

  update(callback: Callback): void {
    this.callback = callback;
  }
}
