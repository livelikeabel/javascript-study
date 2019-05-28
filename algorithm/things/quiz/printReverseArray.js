function printReverseArray(m) {
  let res = [];
  const loop = m.length + m[0].length - 1;

  for (let i = 0; i < loop; i++) {

    let y = i
    for (let x = 0; x <= i; x++) {
      if (m[y] !== undefined && m[y][x]) {
        res.push(m[y][x]);
        if (y > 0) y--;
      } else if(m[y] === undefined) {
        y--;
      }
    }
  }
  console.log(res)
}

printReverseArray(
  [
    [1, 2],
    [3, 4]
  ]
)

printReverseArray(
  [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
  ]
);

printReverseArray(
  [
    [1, 2], 
    [3, 4], 
    [5, 6]
  ]
);

printReverseArray(
  [
    [1, 2, 3], 
    [4, 5, 6]
  ]
);