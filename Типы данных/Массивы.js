/*
    Подмассив наибольшей суммы
    важность: 2
    На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

    Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

    Функция getMaxSubSum(arr) должна возвращать эту сумму.

    Например:

    getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
    getMaxSubSum([2, -1, 2, 3, -9]) = 6
    getMaxSubSum([-1, 2, 3, -9, 11]) = 11
    getMaxSubSum([-2, -1, 1, 2]) = 3
    getMaxSubSum([100, -9, 2, -3, 5]) = 100
    getMaxSubSum([1, 2, 3]) = 6 (берём все)
    Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

    getMaxSubSum([-1, -2, -3]) = 0
    Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

getMaxSubSum = (arr) => {
    let sum = 0;
    let maxSum = 0;

    for (let item of arr) {
        sum += Number(item)
        maxSum = Math.max(maxSum, sum)

        if (sum < 0) sum = 0
    }

    return maxSum
}

console.log( getMaxSubSum([-1, 2, 3, -9]) )
console.log( getMaxSubSum([2, -1, 2, 3, -9]) )


