import { logMatrix } from '../utils/log.mjs';
/*
if an Matrix of NxM has a 0, invalidate row and col
*/

function invalidateMatrix(matrix) {
  const columns = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i] = new Array(matrix[i].length).fill(0);
        columns.push(j);
        break;
      }
    }
  }

  if (columns.length > 0)
    for (let i = 0; i < matrix.length; i++)
      for (let j = 0; j < columns.length; j++) matrix[i][columns[j]] = 0;

  return matrix;
}

const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

logMatrix(invalidateMatrix(matrix));

// O(NxM)
// O(MxN)
