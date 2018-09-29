# Sudoku TDD using JavaScript

Using the Backtracking algorithm -> Sudoku Solver

Start at the first empty square, try a number, and check the row, column, and nearest 3x3 square for a match. If there is no match, the number is currently valid, so move to the next square and try a new number. If you try numbers 1-9 and find no valid numbers, go back to the previous square and increment it by one until you either exceed 9 or you find a new possible valid number. Keep following this same plan, sliding forward and backward through the empty squares until you arrive at a solution.

Step 1 - Use Mocha and Chai

      npm install -g mocha

      npm install chai
