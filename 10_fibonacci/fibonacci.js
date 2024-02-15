const fibonacci = function(n) {
    //can handle strings
    n =parseInt(n);
    //if n = 0 or 1 return number, if n<0 comment 
    if (n<0)return "OOPS"
    if (n===0) return 0;
    if (n===1) return 1;
// next, current, lastone
//next = lastone + current
//current = lastone + next
//this is a recursion method think german dolls
    // return fibonacci(n-1) + fibonacci(n-2)
    let lastone = 0;
    let current = 1;
    let next = '';

//for loop to count it
    for(let i=2; i<=n;i++){
        next = lastone + current;
        lastone =current;
        current=next;
    }

    return current
 
};

// Do not edit below this line
module.exports = fibonacci;
