export const logMatrix = (vals) =>
  console.log(
    JSON.stringify(
      vals.reduce((acc, next, i) => {
        acc[i] = next.join(', ');
        return acc;
      }, []),
      null,
      2
    )
  );
