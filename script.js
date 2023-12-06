
function numPow(num, degree){
    if(degree === 0){
        return 1;
    }
    return num * numPow(num,degree - 1);
}

console.log(numPow(2,5));
console.log(Math.pow(2,5));