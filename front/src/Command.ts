import { step } from "./constants";
import { Config } from "./interfaces/Config";
import { keys, querySelector, round, sleep } from "./utils";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  isPlaying = false;

  constructor(private config: Config) {
    console.log("config: ", this.config);
    this.render();
    this.setActions();
  }

  async play(): Promise<void> {
    while (this.isPlaying) {
      await sleep(15);

      let mf = this.config.multiplicationFactor;
      mf += step;
      mf %= 100;
      mf = round(mf, 2);
      this.config.multiplicationFactor = mf;

      this.render();
      this.callback(this.config);
    }
  }

  render(): void {
    const array = keys(this.config);
    for (const key of array) {
      const elt = querySelector(`div.command label.${key} .value`);
      elt.innerHTML = this.config[key] + "";

      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement,
      );
      sliderElt.value = this.config[key] + "";
    }

    querySelector("button.play").innerHTML = this.isPlaying ? "Pause" : "Play";
  }

  setActions(): void {
    const array = keys(this.config);
    for (const key of array) {
      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement,
      );

      sliderElt.addEventListener("input", () => {
        this.config[key] = Number(sliderElt.value);
        this.render();
        this.callback(this.config);
      });
    }

    querySelector("button.play").addEventListener("click", () => {
      console.log("click");
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });
  }

  update(callback: Callback): void {
    this.callback = callback;
  }
}
