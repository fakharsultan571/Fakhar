const board = document.querySelector('.board-circuit');
const gameBoard = ['', '', '', '', '', '', '', '', ''];
const clickContainer = ["O"];

let winnig_Posibilities = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], // --> rows
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], // --> columns
    [1, 5, 9],
    [3, 5, 9], // --> Diagonals
];


let choices;
function renderResult() {
    let arrayElements = clickContainer.length - 1;

    if (clickContainer[arrayElements] === "O") {
        choices = "X"
        clickContainer.push("X")
    } else if (clickContainer[arrayElements] === "X") {
        choices = "O"
        clickContainer.push("O")
    }
    return clickContainer[arrayElements];
}



function controlMassage() {
    for (let i = 0; i < winnig_Posibilities.length; i++) {
        let answer = winnig_Posibilities[i];
        let [a, b, c] = answer;
        if ((gameBoard[a] === "X" &&
            gameBoard[b] === "X" &&
            gameBoard[c] === "X")
        ) { console.log("Player 1 Win") }
        else if (gameBoard[a] === "O" &&
            gameBoard[b] === "O" &&
            gameBoard[c] === "O") {
            console.log("Player 2 lose");
        }
    }
}
controlMassage()



function renderBoard() {
    board.innerHTML = "";
    gameBoard.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = value;
        cell.addEventListener("click", () => {
            renderResult();
            // console.log(clickContainer);
            gameBoard[index] = choices;
            cell.innerHTML = choices;
            controlMassage()
            // console.log(index)
            console.log(gameBoard);

        })
        board.appendChild(cell)
    })

}
renderBoard();
// console.log(clickContainer);
