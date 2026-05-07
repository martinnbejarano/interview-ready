// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix (matrix: Matrix) {
  for (let row = 0; row < matrix.length; row ++) {
    for (let col = row + 1; col < matrix.length; col ++) {
      let temp = matrix[row][col]
      matrix[row][col] = matrix[col][row]
      matrix[col][row] = temp
    }
  }

  for (let i = 0; i < matrix.length; i ++) {
    matrix[i].reverse()
  }

  return matrix
}