import { Config } from "./interfaces/Config";
import { querySelector } from "./utils";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};

  constructor(private config: Config) {
    console.log("config: ", this.config);
    this.render();
  }

  render(): void {
    const elt = querySelector("div.command label.samples .value");
    console.log("elt: ", elt);
    elt.innerHTML = this.config.samples + "";

    const sliderElt = querySelector(
      "div.command label.samples input",
      HTMLInputElement,
    );
    console.log("sliderElt: ", sliderElt);
    sliderElt.value = this.config.samples + "";
  }

  update(callback: Callback): void {
    this.callback = callback;
  }
}
