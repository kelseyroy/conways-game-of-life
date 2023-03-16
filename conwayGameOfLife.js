const conwayGameOfLife = (rows, columns, cells) => {
    let board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(columns).fill(0)
    }

    if (cells) {
        cells.forEach(cell => {
            let x = cell[0];
            let y = cell[1];
            board[x][y] = 1;
        })
    }

    for (let i = 0; i < rows; i++) {
        for (let i = 0; i < rows; i++) {
        board[i] = 
    }

    return board;

}

// conwayGameOfLife(4,4, [[1,2], [2, 1], [2, 2]])
module.exports = conwayGameOfLife;