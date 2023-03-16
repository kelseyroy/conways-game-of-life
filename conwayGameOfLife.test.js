const conwayGameOfLife = require("./conwayGameOfLife");

let grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

test("returns a grid or matrix to represent board", () => {
    expect(conwayGameOfLife(4, 4)).toEqual(grid);
})

let updatedGrid = [[0,0,0,0],[0,0,1,0],[0,1,1,0],[0,0,0,0]]
let cells = [[1,2], [2, 1], [2, 2]]

test("returns an updated grid or matrix", () => {
    expect(conwayGameOfLife(4, 4, cells)).toEqual(updatedGrid);
})

let unsustainableCells = [[0,0], [3,3]];

test("return an empty board if the cells have less than 2 live neighbors", () => {
    expect(conwayGameOfLife(4, 4, unsustainableCells)).toEqual(grid);
})