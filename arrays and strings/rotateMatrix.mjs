// @ts-check
import { logMatrix } from '../utils/log.mjs';

function rotateMatrix(matrix) {
  const length = matrix[0].length - 1;
  const newMatrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (let row = 0; row <= length; row++) {
    for (let col = 0; col <= length; col++) {
      newMatrix[length - col][row] = matrix[row][col];
    }
  }
  return newMatrix;
}

const matrix = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];

const expectedMatrix = rotateMatrix(matrix);
logMatrix(expectedMatrix);
