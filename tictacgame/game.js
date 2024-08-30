const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let turn = 'X';
let count = 0;

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            cell.textContent = turn;
            count++;
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
        if (checkWin()) {
            alert(`${turn} wins!`);
            resetGame();
        } else if (count === 9) {
            alert('It\'s a tie!');
            resetGame();
        }
    });
});

resetButton.addEventListener('click', () => {
    resetGame();
});

function checkWin() {
    let board = [];
    cells.forEach((cell) => {
        board.push(cell.textContent);
    });

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let win of wins) {
        if (board[win[0]] === board[win[1]] && board[win[1]] === board[win[2]] && board[win[0]] !== '') {
            return true;
        }
    }
    return false;
}

function resetGame() {
    count = 0;
    turn = 'X';
    cells.forEach((cell)=>{
        cell.textContent = '';
    });
    }