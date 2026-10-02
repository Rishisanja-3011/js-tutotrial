->default value:

let hy = function(v1,v2){
    console.log(`${v1+v2}`)
}
hy()


-> rest function :
function abc(...val){
    console.log(val);
}
abc(1,2,3,4,5,6,'Hello','a');











->Pure vs Impure
aisa function ki jo bahar ki value to change nah kare means k
it only does the console log and things

let a = 12;

function abc(){ //-> pure fucntion dont affect the outside values

    console.log(a);

}

function bc(){ //->impure function changes/affects the values outside of fucntion
a++;
console.log(a);
}
abc();
bc();


->Clouser = a function that returns a function 