/* 

Problem Description:

Write a function flatten(arr) that flattens a nested array.

Example:

Input:
[1, [2, [3, 4], 5], 6]

Output:
[1, 2, 3, 4, 5, 6]

*/

/* Solution 1: Using while loop */

function flattenUsingWhileLoop(arr) {
    let flattenArr = [...arr];
    let ind = 0;

    while(ind < flattenArr.length) {
        if (Array.isArray(flattenArr[ind])) {
            flattenArr.splice(ind, 1, ...flattenArr[ind])
        } else {
            ind++
        }
    }
    console.log('Solution 1', flattenArr);
}

flattenUsingWhileLoop([1, [2, [3, 4], 5], 6]);

/* Solution 2: Using recursion */

function flattenUsingRecursion(arr) {
    let flattenArr = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattenArr = flattenArr.concat(flattenUsingRecursion(item));
        } else {
            flattenArr.push(item);
        }
    })
    return flattenArr;
}

flattenUsingRecursion([1, [2, [3, 4], 5], 6]);


/* Solution 3: Using Array.prototype.flat() */

function flattenUsingFlat (arr) {
    const flattenArr = arr.flat(Infinity);
    console.log('Solution 3', flattenArr);
}

flattenUsingFlat([1, [2, [3, 4], 5], 6]);
