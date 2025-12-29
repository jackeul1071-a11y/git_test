// const Cell = () => {
//   let value = 0;

//   const addToken = (player) => {
//     value = player;
//   };

//   const getValue = () => value;

//   return { addToken, getValue };
// };

const Gameboard = () => {
  const board = Array(9).fill("");

  const setBoardCell = (index, sign) => {
    board[index] = sign;
    return board;
  };

  const getBoardCell = (index) => board[index];

  const getBoard = () => board;

  return { setBoardCell, getBoardCell, getBoard };
};

const GameController = (
  playerOneName = "playerX",
  playerTwoName = "playerO"
) => {
  const players = [
    {
      name: playerOneName,
      sign: "x",
    },
    {
      name: playerTwoName,
      sign: "o",
    },
  ];
  let board = Gameboard(),
    round = 1,
    isOver = false,
    isDraw = false,
    activePlayer = players[0];

  const playRound = (playerIndex) => {
    _vaildInput(playerIndex);
    board.setBoardCell(playerIndex, getCurrentPlayerSign());

    _checkWinner(playerIndex, getCurrentPlayerSign());
    _checkDraw();
    _switchPlayerTurn();
  };

  const _vaildInput = (playerIndex) => {
    if (isOver) throw new Error("Game is over");
    if (isDraw) throw new Error("Game is Draw");
    if (playerIndex < 0 || playerIndex >= 9)
      throw new Error("Invalid position");
    if (board.getBoardCell(playerIndex) !== "")
      throw new Error("Position taken");
  };

  const _checkWinner = (playerIndex, curPlayerSign) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    isOver = winningCombinations
      .filter((combinations) => combinations.includes(playerIndex))
      .some((combination) => {
        return combination.every((index) => {
          return board.getBoardCell(index) === curPlayerSign;
        });
      });

    return isOver;
  };
  const _checkDraw = () => {
    if (round === 9) {
      isDraw = true;
      return;
    }
    round++;
  };

  const resetGame = () => {
    isOver = false;
    isDraw = false;
    round = 1;
    activePlayer = players[0];
    board = Gameboard();
  };

  const _switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getCurrentPlayerSign = () => activePlayer.sign;

  const getIsOver = () => isOver;
  const getIsDraw = () => isDraw;

  const getBoard = () => board.getBoard();
  return {
    playRound,
    resetGame,

    _checkWinner,
    getIsOver,
    getIsDraw,
    getCurrentPlayerSign,
    getBoard,
  };
};

export { Cell, Gameboard, GameController, renderGame };
