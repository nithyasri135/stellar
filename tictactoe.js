const cells = document.querySelectorAll("[data-cell]");
const winnerMessage = document.getElementById("winner-message");
const winnerText = document.getElementById("winner");
const restartButton = document.getElementById("restart-button");
const gameBoard = document.getElementById("game-board");
const startGameButton = document.getElementById("start-game");
const playerXInput = document.getElementById("playerX");
const playerOInput = document.getElementById("playerO");

let currentPlayer = "X";
let board = Array(9).fill(null);
let playerXName = "Player X";
let playerOName = "Player O";

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

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes(null) ? null : "Draw";
}

function handleClick(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);

    if (board[index] || winnerMessage.classList.contains("hidden") === false) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("taken");

    const winner = checkWinner();
    if (winner) {
        if (winner === "Draw") {
            winnerText.textContent = "It's a Draw! Keep trying!";
        } else {
            const winnerName = winner === "X" ? playerXName : playerOName;
            const loserName = winner === "X" ? playerOName : playerXName;
            winnerText.textContent = ${winnerName} is the Winner! ✌ 🎉 Great effort, ${loserName}! Keep going!;
        }
        winnerMessage.classList.remove("hidden");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function restartGame() {
    board.fill(null);
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });
    currentPlayer = "X";
    winnerMessage.classList.add("hidden");
}

function startGame() {
    playerXName = playerXInput.value || "Player X";
    playerOName = playerOInput.value || "Player O";
    gameBoard.classList.remove("hidden");
    startGameButton.parentElement.classList.add("hidden");
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
restartButton.addEventListener("click", restartGame);
startGameButton.addEventListener("click", startGame);