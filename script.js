

//->rock paper scisor game 
// function rhs(user,computer){
//     if(user=="r" && computer=="s"){
//         return "user";
//     }

//     else if(user=="s" && computer=="p"){
//         return "user";
//     }
//     else if(user == "p" && computer=="r"){
//         return "computer";
//     }
// }



// console.log(rhs("p","r"));


//->started learning fucntions

// let hii = function(){
//     console.log("HEllo tehre");
// }

// console.log(hii);


// function abd(v1){
//     console.log(`${v1} hello`);
// }

// for(let i=1;i<=10;i++){
//     abd(i);
// }



// ->default value:

// let hy = function(v1,v2){
//     console.log(`${v1+v2}`)
// }

// hy()


// rest:

// function abc(...val){
//     console.log(val);
// }

// abc(1,2,3,4,5,6,'Hello','a');


//->Pure vs Impure
//aisa function ki jo bahar ki value to change nah kare means k 
// it only does the console log and things

// let a = 12;

// function abc(){   //? pure fucntion dont affect the outside values
    
//     console.log(a);
// }

// function bc(){    //?impure function changes/affects the values outside of fucntion 
//     a++;
//     console.log(a);
// }
// abc();
// bc();



// let d = (a,b) =>{
//     return a+b;
// }



// console.log(d(10,15));


// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// const counter = outer();
// counter();
// counter();

// (function(){  //!IIFE
//     console.log("Initialized");
// } ) ();


// function bmi(w,h){    //!BMI calculator
//     return w/(h*h);
// }
// console.log(bmi(60,10));


// function discount(discount){
//     return function(price){
//         let dis = price * (discount/100)
//         return console.log(price-dis);
//     }
                                           // ! Discount calculator
// }

// let disc = discount(20);
//  disc(200);
//  disc(500);
//  let disc1 = discount(50);
//  disc1(200); 


