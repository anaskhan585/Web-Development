let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerSet = "abcdefghijklmnopqrstuvwxyz"
let numberSet = "0123456789"
let symbolSet = "!@#$%^&*()_+/"

let passBox = document.getElementById("pass-box")
let totalChar = document.getElementById("total-char")
let upperInput = document.getElementById("upper-case")
let lowerInput = document.getElementById("lower-case")
let numberInput = document.getElementById("numbers")
let symbolInput = document.getElementById("symbols")

 let getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
 }

 let generatePassword = (password = "") => {
     if(upperInput.checked)
     {
      password += getRandomData(upperSet)
      // console.log(password)
     }
     if(lowerInput.checked)
     {
      password += getRandomData(lowerSet)
      // console.log(password)
     }
     if(numberInput.checked)
     {
      password += getRandomData(numberSet)
      // console.log(password)
     }
     if(symbolInput.checked)
     {
      password += getRandomData(symbolSet)
      // console.log(password)
     }
     if(password.length < totalChar.value)
     {
      return generatePassword(password)
     }
     passBox.innerText = truncateString(password, totalChar.value);
 }
 
//  generatePassword();

 document.getElementById("btnn").addEventListener(
   "click",
   function(){
      generatePassword();
   }
 )

 function truncateString(str, num) {
   if (str.length > num) {
     return str.slice(0, num);
   } else {
     return str;
   }
 }