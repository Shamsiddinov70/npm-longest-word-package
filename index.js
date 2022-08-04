module.exports.longestWord = function longestWord(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        const currentStr = arr[i];

        if (currentStr.length > result.length) {
            result = currentStr;
        }
    }

    return result;
}
