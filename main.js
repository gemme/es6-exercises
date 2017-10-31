/**
 * this code can be tested from 
 * jsbin
 */

/**
 * Code to get tyhe minimum number that does not exist
 * in the array
 */

function solution(arr) {
    // here we remove the repetable values
    // and sort them
    let noRepetable = [...new Set(arr)].sort((a, b) => a - b);
    // console.log(noRepetable);
    let min = noRepetable[0] + 1;
    // here we find the what it is the minum value that does not
    // belong to the array
    for (let i = 1; i < noRepetable.length; i++) {
        if (min === noRepetable[i]) {
            min = noRepetable[i] + 1;
        } else {
            return min;
        }
    }

}

var sol = solution([99, 12, 34, 1, 1, 2, 2, 3, 3]);
//[1,1,2,2,3,3,4,4,5,5,6,6,7,7,9]

console.log(sol);