const conwayGameOfLife = require("./conwayGameOfLife");

const grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

test("returns a grid or matrix to represent board", () => {
    expect(conwayGameOfLife(4, 4)).toBe(grid);
})
// test("returns a grid or matrix to represent board", () => {
//     expect(conwayGameOfLife(4, 4)).toBe(grid);
// })
