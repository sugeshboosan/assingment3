let a=111;

function oddEven(){
    if(a%2==0){
        console.log("even")
    }else{
        console.log("odd"
        )
    }
    
}
oddEven()


let com = {type:"anorid", model:"10", color:"white"};
console.log( "The com type is " + com.type + " and version is " + com.model + "and color is " + com.color)
 

let [type,model] = ['anorid','10'];
console.log(`the os type is ${type} and version is  ${model}`)

// conditional statement
let person = mark => {
if(mark >=50){
    console.log(`mark is ${mark} our grade is A`)
}else{
    console.log(`mark is ${mark} our grade is B`)
}
}

person(55)

// ternary operator

let mark =  35;
console.log(mark >= 50 ? `mark is ${mark} our grade is A` :  `mark is ${mark} our grade is B` )


// switch case


let  mar =50;

switch(mar){
    case  50:
        console.log( `mark is ${mar} our grade is A`);
        break;
    case 35:
        console.log(`mark is ${mar} our grade is B`);

        break;    
}