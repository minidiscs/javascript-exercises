const removeFromArray = function(...nums) {
    const ogArray = nums[0];
    const modifiedArray = [];
    ogArray.forEach((element) => {
        if (!nums.includes(element)) {
            modifiedArray.push(element);
        }
    });
    return modifiedArray
};

// Do not edit below this line
module.exports = removeFromArray;
