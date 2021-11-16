// Write your code below this line.

function findLuckyNumbers(num){
    // declare a result array
    let result = [];
    // iterate of the num provided
    for (let i = 0; i < num; i++){
        // random is between 1 and 10 because it is mulptilied by 10
        let random = Math.floor(Math.random() * 10) + 1;
            // if the current random number generated is unique
            if (result.indexOf(random) === -1){
                // push it into the result array
                result.push(random);
            // oterwise
            } else {
                // do the array one more time
                num += 1;
            }
    }
    // return the result array
    return result;
}

console.log(findLuckyNumbers(10));