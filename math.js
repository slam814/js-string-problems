const result = Math.pow(3, 2); // Power 3 to the power 2 equal 9
console.log(result);


// Math ABS 

const num1 = 65;
const num2 = 60;

const gap = Math.abs(num1 - num2);

if(gap < 5){
    console.log('You two become friends')
}
else{
    console.log('You two keep your distance')
}



// Round Math

const number = 2.4598;

const fullRundedNumber = Math.round(number);
console.log(fullRundedNumber);

const ceilingNumber = Math.ceil(number); // Ceiling Number
console.log(ceilingNumber);


const floorNumber = Math.floor(number); // floor Number

console.log(floorNumber);




// Randome number 0 to 6




for(let i = 1; i < 100; i++){
    const randomeNumber = Math.round(Math.random() * 6) ;



if(randomeNumber === 0){
    console.log(6, i);
}
else{
    console.log(randomeNumber, i);
}
}


