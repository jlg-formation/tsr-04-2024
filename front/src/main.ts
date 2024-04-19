import { Board } from "./Board";
import { Command } from "./Command";
import { Config } from "./interfaces/Config";
import "./style.css";

const config: Config = { samples: 10, multiplicationFactor: 2 };

const board = new Board();
board.setConfig(config);
board.render();

const command = new Command(config);
command.update((newConfig) => {
  board.setConfig(newConfig);
  board.render();
});
