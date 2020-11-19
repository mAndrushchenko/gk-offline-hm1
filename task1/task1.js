
        let arr1 = [3,0,-5,1,44,-12,3,0,0,1,2, [123], -3,-3,2,1,4,-2-3-1];
        let arr2 = [-1,-8,-2, -0.5];
        let arr3 = [1,7,3,];
        let arr4 = [1,undefined,3,5,-3, [6], false, 'fjsaopdi'];
        let arr5 = [1,NaN,3,5,-3];
        let arr6 = [0, 0.1, 0.2, 0.001, 'k', 12, '12', 'ahpfs'];

        function sum(arr) {
            // console.log('your arr: ', arr)

            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                    sum = sum + arr[i];
                }
            }
            return `Sum of array is: ${sum}`;
        }

        function max (arr) {
            // console.log('your arr: ', arr)

            let max = arr[0];           // accepting any first value from the array

            for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max && typeof arr[i] === 'number' ) {
                        max = arr[i];
                }
            }
            return `Max value of array is: ${max}`;
        }

        function min (arr) {
            // console.log('your arr: ', arr)

            let min = arr[0];           // accepting any first value from the array

                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < min && typeof arr[i] === 'number') {
                        min = arr[i];
                    }
            }
            return `Min value of array is: ${min}`;
        }


        console.log(sum(arr1));
        console.log(sum(arr2));
        console.log(sum(arr3));
        console.log(sum(arr4));
        console.log(sum(arr5));
        console.log(sum(arr6));


        console.log(max(arr1));
        console.log(max(arr2));
        console.log(max(arr3));
        console.log(max(arr4));
        console.log(max(arr5));
        console.log(max(arr6));

        console.log(min(arr1));
        console.log(min(arr2));
        console.log(min(arr3));
        console.log(min(arr4));
        console.log(min(arr5));
        console.log(min(arr6));