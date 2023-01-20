let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

const Game = () => {
    const Player = (symbol) => {
        const markLocation = (x, y) => {
            if (board[x][y] === 0) {
                board[x][y] = symbol
                turn = !turn
            } else {
                console.log('Invalid Location')
            }
        }
        return { markLocation }
    }

    const Click = (x, y) => {
        turn ? p1.markLocation(x, y) : p2.markLocation(x, y)
        if (checkWin()) announceWin()
    }

    const checkWin = () => {
        for (let i = 0; i <= 2; i++) {
            if ((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && board[i][0] != 0) {
                return true
            }
        }
        for (let i = 0; i <= 2; i++) {
            if ((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[0][i] != 0) {
                return true
            }
        }
        if ((((board[1][1] === board[0][0]) && (board[2][2] === board[1][1])) || ((board[0][2] === board[0][0]) && (board[2][0] === board[1][1]))) && board[1][1] != 0) {
            return true
        }
        return false
    }

    const announceWin = () => {
        turn ? console.log('Player 1 Wins') : 'Player 2 Wins'
    }

    const drawBoard = () => {
        const table = document.getElementById('board')
        for (rowIndex = 0; rowIndex <= 2; rowIndex++) {
            const row = table.insertRow(rowIndex)
            for (colIndex = 0; colIndex <= 2; colIndex++) {
                const cell = row.insertCell(colIndex)
                cell.innerHTML = '   '
                if (board[rowIndex][colIndex] === 1) {
                    cell.innerHTML = 'X'
                }
                if (board[rowIndex][colIndex] === 2) {
                    cell.innerHTML = 'O'
                }
            }
        }
    }

    const p1 = Player(1)
    const p2 = Player(2)
    let turn = true;
    drawBoard()
    return { Click }
}

const game = Game()