import {deFi} from "../../declarations/deFi";

window.addEventListener("load",async function (){
  console.log("Hello");
  const currentAnt = await deFi.checkAmount();
  console.log(currentAnt);
  document.getElementById("value").innerHTML= Math.round(currentAnt*100)/100; 
});


  document.querySelector("form").addEventListener("submit",async function(event){
  event.preventDefault();

  const button=event.target.querySelector("#submit-btn");

  const addedAmount = parseFloat(document.getElementById("input-amount").value);
  const subtractedAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled",true);

  if(document.getElementById("input-amount").value.length!= 0)  {
    await deFi.topUp(addedAmount);}

  if(document.getElementById("withdrawal-amount").value.length!= 0)  {
  await deFi.withdraw(subtractedAmount);}

  await deFi.compund();

  document.getElementById("input-amount").value ="";
  document.getElementById("withdrawal-amount").value ="";
  const currentAmount = await deFi.checkAmount();
  document.getElementById("value").innerHTML= Math.round(currentAmount*100)/100;

  
  button.removeAttribute("disabled");
});