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

module.exports.saveEmptyPositions = function(board) {
  // Create an array to save the positions
  var emptyPositions = [];

  // Check every square in the puzzle for a zero
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++) {
      // If a zero is found, save that position
      if(board[i][j] === 0) {
        emptyPositions.push([i, j]);
      }
    }
  }

  // Return the positions
  return emptyPositions;
};


module.exports.checkRow = function(board, row, value) {
  // Iterate through every value in the row
  for(var i = 0; i < board[row].length; i++) {
    // If a match is found, return false
    if(board[row][i] === value) {
      return false;
    }
  }
  // If no match was found, return true
  return true;
};

module.exports.checkColumn = function(board, column, value) {
  // Iterate through each value in the column
  for(var i = 0; i < board.length; i++) {
    // If a match is found, return false
    if(board[i][column] === value) {
      return false;
    }
  }
  // If no match was found, return true
  return true;
};

module.exports.check3x3Square = function(board, column, row, value) {
  // Save the upper left corner
  var columnCorner = 0,
      rowCorner = 0,
      squareSize = 3;

  // Find the left-most column
  while(column >= columnCorner + squareSize) {
    columnCorner += squareSize;
  }

  // Find the upper-most row
  while(row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }

  // Iterate through each row
  for(var i = rowCorner; i < rowCorner + squareSize; i++) {
    // Iterate through each column
    for(var j = columnCorner; j < columnCorner + squareSize; j++) {
      // Return false is a match is found
      if(board[i][j] === value) {
        return false;
      }
    }
  }
  // If no match was found, return true
  return true;
};
