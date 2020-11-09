// var tomHeight = 9;
// var tomMass = 8;
// var jerryHeight = 10;
// var jerryMass = 45;
// // Tom BMI = 0.2
// // Jerry BMI = 0.7

let Tom = {
height: 0.2286,
mass: 0.008
}

let Jerry = {
 height: 0.254,
 mass: 0.045

}


function calcuBMI(mass,height){
    return mass / height ** 2;
}
console.log(calcuBMI(0.045,0.254));
console.log(calcuBMI(0.008, 0.2286));



// mass / height ** 2


let TomBMI = calcuBMI(Tom.mass, Tom.height);
let JerryBMI = calcuBMI(Jerry.mass, Jerry.height);
// let HigherBMI = Tom.BMI(calcuBMI) > Jerry.BMI(calcuBMI);
let HigherBMI = calcuBMI(TomBMI) < calcuBMI(JerryBMI);

if(TomBMI < JerryBMI){
    console.log("Is Tom's BMI higher than Jerry's?");
    console.log(HigherBMI);
}
else{
    console.log(true);
}
