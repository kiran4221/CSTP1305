// Question 1 Reverse an integer

function reverseInteger(int1) {
    
    let reversedInt = int1.toString().split("").reverse().join("");
    if(reversedInt.length-1 === '-'){
        reversedInt.slice(0,-1)
        reversedInt = "-" + reversedInt;
    }

    return reversedInt;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-456));

// Question 2 

function returnTargetIndex(array, target) {
    let index = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i]===target) {
            index = i;
        }
        else if(array[i] < target ){
            index = i + 1;
        }
    }

    return index;
}

console.log(returnTargetIndex([1,3,5,6], 5));
console.log(returnTargetIndex([1,3,5,6], 2));

// Question 3

function deleteNodeLinkedList(node) {

}

class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// console.log(deleteNodeLinkedList(4->5->1->9));


//Question 4

function findDuplicates(array) {
    let smallestDupli = 0;
    let emptyArray = [];
    const newArray = array.sort((a, b) => a - b);
    for(let i = 0; i< newArray.length-1; i++) {
        if(newArray[i] === newArray[i+1]){
            smallestDupli = newArray[i];
            emptyArray.push(smallestDupli);
        }
    }
    
    for(let j = 0; j< emptyArray.length; j++)
    if(emptyArray[j] < emptyArray[j+1]){
        smallestDupli = emptyArray[j];
    }

    return smallestDupli;
}

console.log(findDuplicates([4, 10, 5, 1, 11, 5, 1, 4, 1]));
console.log(findDuplicates(1, 10, 1, -1, 10, -1));


// MCQS

// Answer 1 = B) Binary Search

// Answer 2 = A) O(1)

// Answer 3 = B) Smaller than the node

// Answer 4 = C) In-order

// Answer 5 = B) Null