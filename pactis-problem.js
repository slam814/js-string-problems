

/*

Can you find out who will get the delicious cake? 
             (Part 1)

Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake." Can you find out who will get this cake?

Input:
The input line has two values, m (The marks Jim has got) and n (The marks Dela has got).

Output:

Print the name of the topper.

Sample Input-1            Sample Input-2
    84  75                  69  97

Sample Output-1           Sample Output-2:
    Jim                             Dela

hints: find maximum of two values

*/ 

const jim = 984 ;
const dela = 795;

if(jim > dela){
    console.log('jim will get the cake');
}
else{
    console.log('Dela you will get the cake')
}




