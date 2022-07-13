const removeFromArray = function(...nums) {
    const array = nums[0];
    return array.filter(val => !nums.includes(val))  
    
};

// Do not edit below this line
module.exports = removeFromArray;
