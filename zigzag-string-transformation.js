/* Problem Description:

Given a string and an integer representing the number of rows, transform the string into a zigzag pattern that fits into the specified number of rows. This is similar to writing the string in a zigzag pattern on paper and then reading it line-by-line.

In a zigzag pattern:

Characters fill in each row vertically, from the top row down to the bottom row.
After reaching the bottom row, characters continue diagonally upward to the top row, and so on.
The task is to represent the zigzag pattern of the string as a multi-line string, where each row represents a line. If a character in a given row does not exist in the zigzag pattern, place a blank space in its position to maintain column alignment.

Input:
- str (string): A non-empty string containing only uppercase and lowercase English letters.
- rows (integer): The number of rows for the zigzag pattern. (1 ≤ rows ≤ length of the string)

Output:
Return a multi-line string where each row of the zigzag pattern is on a new line.

Example:

Input:
zigzagTransform("PAYPALISHIRING", 3);

Output:

P     A     H     N
A   P L   S I   I G
Y I     R     N

Solution provided below: */


function zigzagTransform(str, rows) {
    
    const gap = rows-2;
    const sectionsN = rows + (rows-2);
    const colsInSection = 1 + (rows-2);
    const totalSections = Math.floor(str.length/sectionsN);
    const totalCharsInSection = rows + colsInSection - 1;
    const totalCols = (colsInSection * totalSections) + (str.length - totalSections*colsInSection > 0 ? 1 : 0);
    
    const arrayOfStrings = Array.from({ length: rows }, () => []);
    
    let charIndex = 0;
    let skip = 0;
    let consecutiveStep = 1;
    
     for (let c = 1; c <= totalCols; c++) {
        for (let r = 1; r <= rows; r++) {
           if (skip === gap || (consecutiveStep <= rows && skip === 0)) {
               arrayOfStrings[r-1].push(str[charIndex] || ' ');
               charIndex++;
               consecutiveStep <= rows && consecutiveStep++;
               skip === gap && (skip = 0);
               
           } else {
               arrayOfStrings[r-1].push(' ');
               skip++;
               charIndex % totalCharsInSection === 0 && (consecutiveStep = 1);
             
           }
           
        }
    }
    let finStr = '';
    for (let i = 0; i < arrayOfStrings.length; i++) {
        finStr+= '\n' + arrayOfStrings[i].join(' ');
    }
    console.log(finStr)
}

zigzagTransform('PAYPALISHIRING', 3)