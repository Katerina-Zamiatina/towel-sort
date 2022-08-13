// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (
        arguments.length === 0 ||
        matrix.length === 0 ||
        typeof matrix === "undefined"
    ) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        let newArray = matrix[i];
        if ((i + 1) % 2 === 0) {
            newArray.reverse();
        }
        arr.push(...newArray);
        // console.log(arr)
    }
    return arr;
};
