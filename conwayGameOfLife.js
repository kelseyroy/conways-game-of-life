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
						let row = board[i]
        for (let j = 0; j < rows; j++) {
						let col = board[j] 
								let neighbors = 0;
							//[ [1,0,0,0]	
    }				//		[1,0,1,0]	
					//			[0,0,1,1]

		}

    return board;
}

// conwayGameOfLife(4,4, [[1,2], [2, 1], [2, 2]])
module.exports = conwayGameOfLife;
/*
    for (let i = 0; i < rows; i++) {
        for (let i = 0; i < rows; i++) {
        board[i] = 
    }
*/




