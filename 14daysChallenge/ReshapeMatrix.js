/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  var originalRow = mat.length;
  var originalCol = 0;

  if (mat[0]) {
    originalCol = mat[0].length;
  }
  if (originalCol === 0) {
    if (r * c !== originalRow) {
      return mat;
    }
  } else {
    if (r * c !== originalRow * originalCol) {
      return mat;
    }
  }
  var convertorMatrix = [];

  for (let i = 0; i < originalRow; i++) {
    for (let j = 0; j < originalCol; j++) {
      convertorMatrix.push(mat[i][j]);
    }
  }
  mat = [];
  for (let i = 0; i < r; i++) {
    mat[i] = [];
    for (let j = 0; j < c; j++) {
      mat[i][j] = convertorMatrix[i + j];
    }
  }
  return mat;
};
