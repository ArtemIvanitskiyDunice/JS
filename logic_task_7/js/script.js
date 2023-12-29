"use strict";
// Написать функцию которая будет строить “шахматную доску”
function createBoard(rows, cols) {
    let board = "";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board += (i + j) % 2 === 0 ? "_" : "#";
        }

        if (i < rows - 1) {
            board += "\n";
        }
    }

    console.log(board);
}

createBoard(5, 10);
