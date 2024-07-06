// Question 1

// function findMissingNumber(array,n) {
//     let missingNum;
//     for(let i = 0; i < array.length; i++) {
//         for(let j = 0; j < n; j++) {
//             if(array[j] < array[j+1]) {
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }

//             

//             }
//         }
         
//     }

//     return missingNum;
// }

function findMissingNumber(array,num) {
    let missingNum;
    for(let i = 0; i < array.length; i++) {
        const element = array.find((element) => element === array[i]);
        if(array[i] !== element);
        missingNum = i;
    }
    return missingNum;
}


console.log(findMissingNumber([5,4,1,2] , 5));
console.log(findMissingNumber([9,5,3,2,6,1,7,8,10] , 10));
console.log(findMissingNumber([2,3,1,5] , 5));
console.log(findMissingNumber([1,2,3,4,5] , 6));

//Time Complexity = O(n)*O(1) = O(n)


// Question 2

function arrayOfIndices(array, target){
    let outputArray = [];

    if(array.length === 0) {
        return "empty array"
    }

    if(array.length === 1) {
        return array;
    }

    for(let i = 0; i<array.length-1; i++) {
        for(let j = i+1; j < array.length;j++) {
            if(array[i]+ array[j] === target) {
                outputArray.push(i,j);
            }
        }
    }

    return outputArray;
}

console.log(arrayOfIndices([1, 5, 2, 7], 8));
console.log(arrayOfIndices([20, 1, 5, 2, 11], 3));
console.log(arrayOfIndices([3, 2, 4], 6));

// Time Complexity = O(n^2)

//Question 3

function getPermutation(str) {
    let finalArray = [];

    if (str.length === 1) {
        finalArray.push(str);
        return finalArray;
    }
    

}


// Question 4

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

function checkIfCycleExists(headNode) {
    let n1 = headNode;
    let n2 = headNode.next;
    while(n2 && n2.next) {
        if(n1 === n2) {
            return true;
        }
        n1 = n1.next;
        n2 = n2.next.next;
    }
    return false;
}

let node1 = new Node('1');
let node2 = new Node('2');
let node3 = new Node('3');
let node4 = node1;

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(checkIfCycleExists(node1));

// Question 5 

function checkIfValidParenthesis(str) {
    for(let i = 0; i <str.length-1; i++) {
        let firstbracket = str[i];
        let nextbracket = str [i+1];

        if ((firstbracket === "(" && nextbracket === ")") || (firstbracket === "{" && nextbracket === "}" ) || (firstbracket === "[" && nextbracket === "]") ) {
            return true;
        }
    }
        
    return false;
}

console.log(checkIfValidParenthesis("()"));
console.log(checkIfValidParenthesis("[){}[]"));
console.log(checkIfValidParenthesis("([})"));
console.log(checkIfValidParenthesis("[({})]"));

// Time Compelxity for this = O(n)