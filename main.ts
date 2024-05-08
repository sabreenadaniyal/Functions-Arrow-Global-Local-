//<><><><><><><><><><><><><><><><>ARROW FUNCTION<><><><><><><><><><><><><><><><><><<><><><><><><
let myName=() => {
  console.log("Sana");
}
myName()

//---------------------------------Arrow function with Return-------------------------------------
let Name1=(name:string):string => {
    return(`Hello!${name},How are you?`);  
}
let ans=Name1("Sabrena")
console.log(ans);

//----------------------------------Conditions-----------------------------------------------------
//condition with return
let isfeesPiad = (pay:string):boolean => {
    if(pay == "yes"){
        return(true);
}else{
   return(false);}
}
let answer = isfeesPiad("true")
console.log(answer);

//CALCULATOR
let calc = (digit:number, digit2:number, sign:string) => {
  if(sign == "+"){
   console.log(digit+digit2);
}else if(sign == "-"){
   console.log(digit-digit2);
}else if(sign == "*"){
    console.log(digit*digit2);
}else{
    console.log(digit/digit2);}
}
calc(5,10,"+")
calc(15,5,"-")
calc(2,20,"*")
calc(10,2,"/")

//---------------------------------------Block Scope(local scope)--------------------------------------------
function uniStudent(){
     let std = "Saqib"
     console.log("Haseeb");
}
uniStudent()

//---------------------------------Global Scope----------------------------------------------
let globalPassport = "German_passport"
let Pakistan = ( ) => {
    let pakistani_pass = "Pakistani-Passport"
    console.log("Pakistani");
    let globalPassport = "German_passport"
    console.log(globalPassport);
}
let India = () => {
    let Indian_pass = "Indian-Passport"
    console.log("Indian");
    let globalPassport = "German_passport"
    console.log(globalPassport);   
}
console.log(globalPassport);
Pakistan()
India()

