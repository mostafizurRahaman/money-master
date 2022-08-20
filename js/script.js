function isValid(inputValue){
   if(isNaN(inputValue)){
      alert('Enter a Number please:'); 
     return  0; 
   }else if(inputValue < 0){
      alert("Enter a Positive number"); 
      return 0; 
   }else{
      return inputValue; 
   }
}

function getInputValue(inputId){
   const inputField = document.getElementById(inputId); 
   const inputFieldValueString = inputField.value ; 
   let inputFieldValue = parseFloat(inputFieldValueString); 
   inputField.value = ""; 
   return inputFieldValue; 
}

function getElementValue(inputId){
   const element = document.getElementById(inputId); 
   const elementValueString = element.innerText; 
   const elementValue = parseFloat(elementValueString); 
  return elementValue; 
   
}

function setElementValue(inputId, Value){
   const element = document.getElementById(inputId); 
   element.innerText = Value; 
}

document.getElementById('calculate-btn').addEventListener('click', function(){
   // get total income
   const income = getInputValue('income'); 

   // get expenses list 
   const foodExpenses = getInputValue('food'); 
   const rentExpenses = getInputValue("rent")
   const clothsExpenses = getInputValue("cloths"); 
   //validation 
   if(isNaN(income) || isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothsExpenses)){
      alert('Please Enter a valid Number:'); 
      return; 
   }else if(income <0 ||foodExpenses <0 || rentExpenses < 0 || clothsExpenses <0){
      alert('Please Enter a Positive Number'); 
      return; 
   }
   // totalExpenses 
   const totalExpenses = foodExpenses +rentExpenses + clothsExpenses; 
   if(totalExpenses > income){
      alert("You can't not expense more then income"); 
      return; 
   }
   setElementValue("total-expense", totalExpenses); 
   //balance 
   const balance = income - totalExpenses;
   setElementValue('balance', balance);  
   
}); 



document.getElementById('save-btn').addEventListener('click', function(){
   const balance = getElementValue('balance'); 
   let savingPercentage = getInputValue('saving-field'); 
   if(savingPercentage > 100){
      alert("You cannot get discount more then 100%"); 
      return; 
   }else if(savingPercentage < 0){
      alert('Please Enter a positive number: '); 
      return; 
   }
   const savings = balance *(savingPercentage /100); 
   setElementValue('saving-amount',savings); 
   const remainingBalance = balance - savings ; 
   setElementValue('remaining-balance', remainingBalance); 
}); 


