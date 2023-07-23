const removeFromArray = function (...args) {
    const originalArray = args[0];
    const newArray = [];

    originalArray.forEach(element => {
        if(!args.includes(element)) {
            newArray.push(element);
        }    
    });

    return newArray;
    
    
}
// Do not edit below this line
module.exports = removeFromArray;
