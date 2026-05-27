// TODO: Create an array called numbers with values 1 through 5
let numbers = [1, 2, 3, 4, 5];

// TODO: Write a for loop that prints each number in the array
console.log("For numbers:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// TODO: Write a while loop that counts down from 5 to 1
console.log("While loop countdown: ");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}

// TODO: Create a loop that prints only even numbers from the numbers array 
console.log("Even numbers:");
for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] % 2 === 0) {            
        console.log(numbers[i] + " is even");
    }
}

//TODO: Create a loop that calculates the sum of all numbers in the array     
let sum = 0; 
for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i];
}
console.log("Sum: " + sum);


// Krishendree - finshed creating the arrays, and count down of loops.
// Double checked and everything works perfectly.

// Owam - did the last 2 questions .

// found a few errors, corrected it, code is working perfect.
