"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus, startGame, } from "./FlappyBird.mjs";

/*
Dere skal flytte FlappyBird Spriten til en fornuftig plass på skjermen.
Lage en play knapp som kan starte spillet.
*/
let Score1 = 9;
let Score2 = 0;
let HighScore1 = 9;
let HighScore2 = 9;



export class TMenu {
  #spFlappyBird;
  #spButtonPlay;
  #spNumber;
  #spInfoText;
  #spGameOver;
  #spMedal;
  #spScores;
  #spHighScore;
  #ranking = { first: 1, second: 2, third: 3 };

  #spcvs;
  #activeSprite;
  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;
    const pos = new lib2d.TPosition(200, 100);
    //status cheat
    //GameProps.status = EGameStatus.gameOver;

    this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);
    pos.y = 200;
    pos.x = 230;

    this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay, pos);

    this.#spScores = [];
    let score = 0; // Ensure score is defined and initialized
    let scoreStr = score.toString();
    for (let i = 0; i < scoreStr.length; i++) {
      pos.x = 340 - (i * 15);
      pos.y = 135;
      let spScore = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberSmall, pos);
      spScore.index = parseInt(scoreStr[scoreStr.length - 1 - i]);
      this.#spScores.push(spScore);
    }

    this.#spHighScore = [];
    let scoreBest = 0; // Example score, replace with actual score variable
    let scoreBestStr = scoreBest.toString();
    for (let i = 0; i < scoreBestStr.length; i++) {
      pos.x = 340 - (i * 15);
      pos.y = 175;
      let spScoreBest = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberSmall, pos);
      spScoreBest.index = parseInt(scoreBestStr[scoreBestStr.length - 1 - i]);
      this.#spHighScore.push(spScoreBest);
    }

    pos.x = 200;
    pos.y = 100;
    this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos);

    pos.x = 150;
    pos.y = 100;
    this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver, pos);

    pos.x = 175;
    pos.y = 142;
    this.#spMedal = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.medal, pos);

    pos.x = 285;
    pos.y = 180;
    this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig, pos);
    this.#spNumber.index = 3; //Nedtelling starter på 3
    this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
    this.#spcvs.addEventListener("click", this.#onClick);
    this.#activeSprite = null; //Vi har ingen aktive sprite enda, når musen er over en sprite setter vi denne til den aktive sprite

  }

  draw() {
    switch (GameProps.status) {
      case EGameStatus.idle:
        this.#spFlappyBird.draw();
        this.#spButtonPlay.draw();
        break;
      case EGameStatus.getReady:
        this.#spInfoText.index = 0;
        this.#spInfoText.draw();
        this.#spNumber.draw();
        break;

      case EGameStatus.gameOver:
        this.#spGameOver.draw();
        this.#spButtonPlay.posX = 210;
        this.#spButtonPlay.posY = 250;
        this.#spButtonPlay.draw();
        this.#spInfoText.index = 1;
        this.#spInfoText.posX = 165;
        this.#spInfoText.posY = 50;
        this.#spInfoText.draw();
        this.#spMedal.draw();

        // Update the #spScores array with the current score
        const pos = new lib2d.TPosition(340, 135); // Adjust position as needed
        const scoreStr = GameProps.score.toString();
        this.#spScores = []; // Clear the previous score
        for (let i = 0; i < scoreStr.length; i++) {
          pos.x = 340 - i * 15; // Adjust spacing as needed
          const spScore = new libSprite.TSprite(this.#spcvs, SpriteInfoList.numberSmall, pos);
          spScore.index = parseInt(scoreStr[scoreStr.length - 1 - i]);
          this.#spScores.push(spScore);
        }

        this.#spScores.forEach(spScore => spScore.draw());
        this.#spHighScore.forEach(spScoreBest => spScoreBest.draw());
        break;

      case EGameStatus.playing:
        break;
    }
  } // end of draw

  incScore(aScore) {
    GameProps.score += aScore;
    if (GameProps.score > this.#ranking.first) {
      this.#ranking.third = this.#ranking.second;
      this.#ranking.second = this.#ranking.first;
      this.#ranking.first = GameProps.score;
      GameProps.bestScore = this.#ranking.first;
  } else if (GameProps.score > this.#ranking.second) {
      this.#ranking.third = this.#ranking.second;
      this.#ranking.second = GameProps.score;
  } else if (GameProps.score > this.#ranking.third) {
      this.#ranking.third = GameProps.score;
    }
  } // end of incScore

  reset() {
    GameProps.score = 0;
    this.#spNumber.index = 3;
  }

  //Ikke eksamensrelevant kode, men viktig for eventer i canvas
  #onMouseMove = (aEvent) => {
    const pos = this.#spcvs.getMousePos(aEvent);
    const boundRect = this.#spButtonPlay.boundingBox;
    switch(GameProps.status){
      case EGameStatus.idle:
        if (boundRect.isPositionInside(pos)) {
          this.#spcvs.style.cursor = "pointer";
          this.#activeSprite = this.#spButtonPlay;
        } else {
          this.#spcvs.style.cursor = "default";
          this.#activeSprite = null; //Ingen sprite er aktiv
        }
        break;
    }
  };

  #onClick = () => {
    if (this.#activeSprite === this.#spButtonPlay) {
      GameProps.status = EGameStatus.getReady;
      this.#spcvs.style.cursor = "default";
      setTimeout(this.#onCountDown, 1000);
    }
  };

   #onCountDown = () =>{
    if(this.#spNumber.index > 1){
      this.#spNumber.index--;      
      setTimeout(this.#onCountDown, 1000);
    }else{
      startGame();
    }
   }

}// End of TMenu class
