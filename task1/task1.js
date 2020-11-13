        let arr1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
        let arr2 = [-1,-8,-2, -0.5];
        let arr3 = [1,7,3,];
        let arr4 = [1,undefined,3,5,-3, false, 'fjsaopdi']
        let arr5 = [1,NaN,3,5,-3];
        let arr6 = [0, 0.1, 0.2, 0.001, 'k', 12, '12', 'ahpfs'];

        function maxMinSum  (arr) {
            console.log('Your array: ',arr);
            let max = 0;
            let min = 0;
            let sum = 0;
            (function () {
                min = arr[0];
                max = arr[0];
            })();

            for (let i = 0; i < arr.length; i++) {
                    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                      sum = sum + arr[i]
                }
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i] > arr[j] && arr[i] > max) {
                        max = arr[i]
                    } else if (arr[i] < arr[j] && arr[i] < min) {
                        min = arr[i]
                    }
                }
            }
            return ` max: ${max}\n min: ${min}\n sum: ${sum}`;

        };

        console.log(maxMinSum(arr1));
        console.log(maxMinSum(arr2));
        console.log(maxMinSum(arr3));
        console.log(maxMinSum(arr4));
        console.log(maxMinSum(arr5));
        console.log(maxMinSum(arr6));
