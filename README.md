# Sudoku TDD using JavaScript

Using the Backtracking algorithm -> Sudoku Solver

Start at the first empty square, try a number, and check the row, column, and nearest 3x3 square for a match. If there is no match, the number is currently valid, so move to the next square and try a new number. If you try numbers 1-9 and find no valid numbers, go back to the previous square and increment it by one until you either exceed 9 or you find a new possible valid number. Keep following this same plan, sliding forward and backward through the empty squares until you arrive at a solution.

Step 1 - Use Mocha and Chai

      npm install -g mocha

      npm install chai


      mocha sudoku_solver_spec.js
      

1. parseBoard: Parse the string into a 2D array and convert strings to integers for easier manipulation.

2. saveEmptyPositions: Iterate through the board and save all of the empty positions into an array so we can track which numbers are mutable and keep order to our testing.

3. checkRow, checkColumn, check3x3Square, checkValue: Check the column, row, and current 3x3 square for a match to the current value tested, which can all be called with checkValue.

4. solvePuzzle: Take the parsed Sudoku board and the array of empty positions, and find the solution.

5. solveSudoku: Parse the board, save the empty positions, and pass them to solvePuzzle.
