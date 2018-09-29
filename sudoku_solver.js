module.exports.parseBoard = function(board) {
  // split the board at each new line, and use map
  // to split each row into an array of characters
  return board.split('\n').map(function(row) {
    // use map to convert the characters into integers
    return row.split('').map(function(num) {
      return +num;
    });
  });
};
