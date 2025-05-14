"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
import lib2d from "../../common/libs/lib2d.mjs";
import { GameProps } from "./FlappyBird.mjs";

class TObstacle {
  #upper;
  #lower;
  #spi;
  constructor(aSpriteCanvas, aSpriteInfo) {
    this.#spi = aSpriteInfo;
    const minTop = -320 + 25;
    let top = Math.floor(Math.random() * minTop);
    let pos = new lib2d.TPosition(650, top);

    // Create the upper obstacle
    this.#upper = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#upper.index = GameProps.dayTime ? 3 : 1; // Day: 3, Night: 1

    const groundY = GameProps.ground.posY;
    top += this.#spi.height + 150;
    const gap = top - groundY - 25;

    // Create the lower obstacle
    top = Math.floor(Math.random() * gap) + groundY - 25;
    pos.y = top;
    this.#lower = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#lower.index = GameProps.dayTime ? 2 : 0; // Day: 2, Night: 0

    this.hasPassed = false;
  }

  draw() {
    this.#upper.draw();
    this.#lower.draw();
  }

  update() {
    this.#upper.translate(-1, 0);
    this.#lower.translate(-1, 0);
    const hasCollided =
      GameProps.hero.hasCollided(this.#upper) ||
      GameProps.hero.hasCollided(this.#lower);

    if (hasCollided) {
      GameProps.hero.flap();
      GameProps.hero.isDead = true;
      const audio = new Audio("./Media/gameOver.mp3");
      audio.play();
    }
  }

  setNightMode(isNight) {
    if (isNight) {
      this.#upper.index = 1; // Night mode for upper obstacle
      this.#lower.index = 4; // Night mode for lower obstacle
    } else {
      this.#upper.index = 3; // Day mode for upper obstacle
      this.#lower.index = 2; // Day mode for lower obstacle
    }
  }

  get posX() {
    return this.#upper.posX;
  }

  get left() {
    return this.#upper.left;
  }

  get right() {
    return this.#upper.right;
  }
}

export default TObstacle;
