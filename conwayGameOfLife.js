const conwayGameOfLife = (rows, columns) => {
    let board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(columns).fill(0)
    }
    console.log(typeof(board))
    return board;

    // [
    //     0, 0, 0, 0,
    //     0, 0, 1, 0,
    //     0, 1, 1, 0,
    //     0, 0, 0, 0,
    // ]

    // cellObj = {}


}

module.exports = conwayGameOfLife;