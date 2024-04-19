import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./utils";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};

  constructor(private config: Config) {
    console.log("config: ", this.config);
    this.render();
  }

  render(): void {
    const array = keys(this.config);
    for (const key of array) {
      const elt = querySelector(`div.command label.${key} .value`);
      console.log("elt: ", elt);
      elt.innerHTML = this.config[key] + "";

      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement,
      );
      console.log("sliderElt: ", sliderElt);
      sliderElt.value = this.config[key] + "";
    }
  }

  update(callback: Callback): void {
    this.callback = callback;
  }
}
