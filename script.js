let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
let game;

const Game = () => {
    const Player = (symbol) => {
        const markLocation = (x, y) => {
            if (board[x][y] === 0) {
                board[x][y] = symbol
                checkWin()
                turn = !turn
            } else {
                console.log('Invalid Location')
            }
        }
        return { markLocation }
    }

    const Click = (x, y) => {
        turn ? p1.markLocation(x, y) : p2.markLocation(x, y)
        drawBoard()
    }

    const checkWin = () => {
        for (let i = 0; i <= 2; i++) {
            if ((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && board[i][0] != 0) {
                announceWin()
                return 
            }
        }
        for (let i = 0; i <= 2; i++) {
            if ((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[0][i] != 0) {
                announceWin()
                return 
            }
        }
        if ((((board[1][1] === board[0][0]) && (board[2][2] === board[1][1])) || ((board[0][2] === board[0][0]) && (board[2][0] === board[1][1]))) && board[1][1] != 0) {
            announceWin()
            return 
        }
        return console.log('no Winner')
    }

    const announceWin = () => {
        turn ? console.log('Player 1 Wins') : console.log('Player 2 Wins')
    }

    const drawBoard = () => {
        const boardOBJ = document.getElementById('board')
        const children = boardOBJ.childNodes
        let counter = 1;
        for (i = 0; i < 3; i++) {
            for (a = 0; a < 3; a++) {
                children.item(counter).innerHTML = checkPosition(i, a)
                counter += 2;
            }
        }
    }

    const checkPosition = (row, col) => {
        let value = board[row][col]
        switch (value) {
            case 2: return '<button>2</button>';
            case 1: return '<button>1</button>';
            default: return `<button onClick='game.Click(${row},${col})'>0</button>`
        }
    }

    const p1 = Player(1)
    const p2 = Player(2)
    let turn = true;
    drawBoard()
    return { Click }
}

document.addEventListener("DOMContentLoaded", function () {
    game = Game()   
})

