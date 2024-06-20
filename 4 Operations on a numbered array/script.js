 // let a = 5;
        // let b = 4;
        // let c = 3;
        // let d = 2;
        // let e = 1;
        // let myNums = [a,b,c,d,e]


        let myNums = [1, 2, 3, 4, 5, 6, 8, 9, 10, 7]
        console.log('My array consists of ' + myNums);




        // to findout the largest element in the array
        function max() {
            return Math.max(...myNums)
            // used the spread operator here {...}
        }
        console.log('The largest number in the array is: ' + max());



        // to findout the smallest element in the array
        function min() {
            return Math.min(...myNums)
            // used the spread operator here {...}
        }
        console.log('The smallest number in the array is: ' + min());



        // to findout the even elements in the array
        function even() {
            return myNums.filter(num => {
                // used the filter operator here {.filter()}
                return num % 2 == 0
            })
        }
        console.log('The even numbers in the array are: ' + even());



        // to findout the odd elements in the array 
        let odd = () => {
            // using arrow function here
            return myNums.filter(num => {
                // used the filter operator here {.filter()}
                return num % 2 != 0
            })
        }
        console.log('The odd numbers in the array are: ' + odd());

        // odd numbers asc sorted
        console.log('The odd numbers sorted in ascending order: ' + odd().sort());
        // odd numbers desc sorted
        console.log('The odd numbers sorted in descending order: ' + odd().sort((a, b) => (b - a)));



        // to findout the elements divisible by 3 in the array
        let numberDivisibleBy3 = () => myNums.filter(num => num % 3 == 0);
        // no need to add 'return' here like incase of even numbers as just one expression after the arrow function can be written without '{} curly braces'
        // Thus one expression can be returned directly without using the 'return' keyword        
        console.log('The numbers divisible by 3 in the array are: ' + numberDivisibleBy3());


        // to findout the elements not divisible by 3 in the array
        let numberNotDivisibleBy3 = () => myNums.filter(num => num % 3 != 0);
        console.log('The numbers not divisible by 3 in the array are: ' + numberNotDivisibleBy3());


        // to findout all the prime numbers in the array
        const allPrime = (num) => {
            if (num < 2) return false;
            else{
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        return false;
                    }
                }
                return true;
            }
        };
        console.log('All the prime numbers in the array are: ' + myNums.filter(allPrime));
