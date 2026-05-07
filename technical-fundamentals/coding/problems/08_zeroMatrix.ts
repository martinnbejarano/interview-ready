// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
  const r = Array(matrix.length).fill(false)
  const c = Array(matrix[0].length).fill(false)

  for (let row = 0; row < matrix.length; row ++) {
    for (let col = 0; col < matrix[0].length; col ++){
      if (matrix[row][col] == 0) {
        r[row] = true
        c[col] = true
      }
    }
  }

  for (let row = 0; row < matrix.length; row ++) {
    for (let col = 0; col < matrix[0].length; col ++) {
      if (r[row] || c[col]) {
        matrix[row][col] = 0
      }
    }
  }

  return matrix
}