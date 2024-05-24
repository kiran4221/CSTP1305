//Challenge 1

var fib = function(n) {
    if (n<=0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fib(n-1)+fib(n-2);
    }
};

// Challenge 2

var removeDuplicates = function(nums) {
    let k = 1;
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};