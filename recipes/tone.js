const play = document.querySelector(".toplay");
const btns = document.querySelectorAll(".select");
const logBody = document.querySelector("#logBody");
const finalResultDiv = document.querySelector("FinalResult");

class GameState {
  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
      this.currentRond = 1;
      
  }

  setNewRound(e) {
    console.log(`\n===第${this.currentRond++}轮===`);
    const p = e.target.value;
    const c = Math.floor(Math.random() * 3 - 1);
    const diff = p - c;

    

    console.log(` 你的选择 ${getChoiceName(p)}`);
    console.log(` 电脑选择 ${getChoiceName(c)}`);

    this.getRoundResult(diff);
  }

  getRoundResult(diff) {
    if (diff === 1 || diff === -2) {
      console.log("玩家赢了");
      this.playerScore++;
    } else if (diff === 0) {
      console.log("平局");
    } else {
      console.log("电脑赢了");
      this.computerScore++;
    }
    this.shouldContinueGame();
  }

  shouldContinueGame() {
    if (this.playerScore >= 3 || this.computerScore >= 3) {
      this.endGame();
      return;
    }
    console.log("游戏继续");
  }

  endGame() {
    console.log("=========游戏结束===========");
    if (this.playerScore < this.computerScore) {
      console.log("电脑最终赢");
    }
    if (this.playerScore > this.computerScore) {
      console.log("玩家最终赢");
    }
    console.log(`电脑${this.computerScore}分  , 玩家${this.playerScore}分`);
    game = null;
  }
}

const getChoiceName = (choice) => {
  const map = { 1: "石头", 0: "剪刀", [-1]: "布" };
  return map[choice];
};

// const playGame = () => {
//   console.log(" 开始石头剪刀布游戏！");
//   console.log("先拿到5分的人获胜");
//   game = new GameState();
//   console.clear();
// };

const handleClick = (e) => {
  if (!game) {
    console.log("游戏未开始");
    console.log("你需要点击playGame()");
    return;
  }
  game.setNewRound(e);
};

let game = new GameState();
// play.addEventListener("click", playGame);
btns.forEach((btn) => btn.addEventListener("click", (e) => handleClick(e)));

console.log("游戏已加载，点击按钮或输入 playGame() 开始游戏");
