let weight = document.getElementById("weight");
let height = document.getElementById("height");
let button = document.getElementById("button");
let BMI = document.getElementById("bmiText");

button.addEventListener("click", function(){
    BMI.innerHTML = "Your BMI is " + CalculateBMI() + "!";
});
 
function CalculateBMI(){
   let res = weight.value / ((height.value / 100) * (height.value / 100)) 
   if(height.value >= 0 && weight.value >= 0){
   alert(height.value, weight.value);
   return Math.floor(res * 100) / 100;
   }
    else
   return "not real";
}
