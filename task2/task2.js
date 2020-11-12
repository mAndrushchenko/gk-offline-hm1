/*
Дан масив чисел, которые представляют собой показатели высоты скал: [2,1,5,0,3,4,7,2,3,1,0]
(для примера дан этот масив, но может быть любой, Ваш алгоритм должен решать все случаи)
Посчитать количество воды (количество синих йчеек), набранной в ямы после дождя.
Нужно по возможности использовать методы массива, а не обычные цыклы.
Например, в даном примере правильный ответ: 10
 */

let arr1 = [2,1,5,0,3,4,7,2,3,1,0];
let arr2 = [0,1,4,2,4,5,7,4,4,7,0,9,0,0,0,9,1,0,0,1,4 ];

function waterCounter (arr) {
    let waterCount = 0;
    let max = 0;

    arr.reduce((a,b) => a - b < 0 ? max = b : max);

    let ar1 = arr.slice(0, arr.indexOf(max)+1);
    let ar2 = arr.slice(arr.indexOf(max)).reverse();

    function counter (sliceArr) {
        sliceArr.reduce((a,b) => {
            let c = a - b
            if (c > 0) {
                waterCount = waterCount + (a-b)
                return a;
            } else {
                return b;
            }
        })
    }
    counter(ar1);
    counter(ar2);
    return `Amount of water is: ${waterCount}`;
}

console.log(waterCounter(arr2));