export function calculateWinner(cellList) {
  if (!Array.isArray(cellList) || cellList.length !== 9) return

  const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winList.length; i++) {
    const [first, second, third] = winList[i]
    if (
      cellList[first] &&
      cellList[first] === cellList[second] &&
      cellList[first] === cellList[third]
    )
      return cellList[first]
  }
  return
}
