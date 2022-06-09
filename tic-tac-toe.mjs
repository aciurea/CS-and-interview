const isRowWinner = (table, symbol) => {
  return table.some((moves) => moves.every((move) => move === symbol));
};

const isColWinner = (table, symbol) => {
  return table.some((_, index) => {
    return table.every((_, row) => {
      const move = table[row][index];

      return move === symbol;
    });
  });
};

const isDiagonalWinner = (table, symbol) => {
  //first diagonal table[row][row]
  // second diagonal table[row][table.length- 1 -row]

  let firstDiagonal = true;
  let secondDiagonal = true;
  return table.every((_, index) => {
    const moveOnFirstdiagonal = table[index][index];
    const moveOnSecondDiagonal = table[index][table.length - 1 - index];
    if (firstDiagonal) firstDiagonal = moveOnFirstdiagonal === symbol;
    if (secondDiagonal) secondDiagonal = moveOnSecondDiagonal === symbol;

    return firstDiagonal || secondDiagonal;
  });
  //   const isWinnerOnFirstDiagonal = table.every((_, index) => {
  //     const move = table[index][index];
  //     return move === symbol;
  //   });
  //   if (isWinnerOnFirstDiagonal) return true;

  //   return table.every((_, index) => {
  //     const move = table[index][table.length - 1 - index];

  //     return move === symbol;
  //   });
};

const isGameOver = (table, symbol) => {
  return (
    isDiagonalWinner(table, symbol) ||
    isRowWinner(table, symbol) ||
    isColWinner(table, symbol)
  );
};

const generateTable = (size) => {
  return new Array(size).fill([]).map(() => new Array(size).fill(null));
};

const table = generateTable(3);

console.log(
  isColWinner(
    [
      ['x', null, 'o'],
      ['x', null, 'o'],
      ['o', null, 'o'],
    ],
    'o'
  )
);

console.log(
  isRowWinner(
    [
      ['x', 'x', 'x'],
      ['x', null, 'o'],
      ['o', null, 'o'],
    ],
    'x'
  )
);

console.log(
  isDiagonalWinner(
    [
      ['x', 'x', 'x'],
      ['x', 'x', 'o'],
      ['o', null, 'x'],
    ],
    'x'
  )
);

console.log(
  isDiagonalWinner(
    [
      ['x', 'x', 'o'],
      ['x', 'o', 'o'],
      ['o', null, 'x'],
    ],
    'o'
  )
);
