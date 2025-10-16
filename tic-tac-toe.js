window.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    let currentPlayer = "X";
    let gameOver = false;

    // Exercise 1: Add "square" class to each cell
    squares.forEach(square => {
        square.classList.add("square");

        // Exercise 2: Click to place X or O
        square.addEventListener("click", () => {
            if (square.textContent === "" && !gameOver) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                checkWinner();
                if (!gameOver) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Exercise 3: Hover effect
        square.addEventListener("mouseover", () => {
            if (!square.textContent && !gameOver) {
                square.classList.add("hover");
            }
        });
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    // Exercise 4: Check for winner
    function checkWinner() {
        const winPatterns = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                const winner = squares[a].textContent;
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add("you-won");
                gameOver = true;
                return;
            }
        }
    }

    // Exercise 5: New Game button resets board
    newGameButton.addEventListener("click", () => {
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
        currentPlayer = "X";
        gameOver = false;
    });
});
