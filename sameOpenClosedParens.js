function sameParens(str) {
  const stack = [];
  const closedParensLookup = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < str.length; i++) {
    const paren = str[i];

    if (closedParensLookup[paren]) {
      const lastOpenParen = stack.pop();

      if (closedParensLookup[paren] !== lastOpenParen) {
        return false;
      }
    } else stack.push(paren);
  }

  return stack.length === 0;
}
