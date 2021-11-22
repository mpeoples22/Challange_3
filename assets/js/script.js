// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
   var pwLen = undefined;
   var pwLenB = undefined;
   var spChar = undefined;
   var spCharB = undefined;
   var uprCs = undefined;
   var uprCsB = undefined
   var lwrCs = undefined;
   var lwrCsB = undefined;
   var num = undefined;
   var numB = undefined;
   var sCharA=["!","@","#","$","%","?"];
   var lcsChr=['z','x','c','v','b','n','m','a','s','d','f','g','h','j','k','l','q','w','e','r','t','y','u','i','o','p'];
   var upChr=['Z','X','C','V','B','N','M','K','J','H','G','F','D','S','A','Q','W','E','R','T','Y','U','I','O','P','L'];
   var Nums=[1,2,3,4,5,6,7,8,9,0];
   var passwordA=[];
   var dArr = [spCharB,lwrCsB,uprCsB,numB];
   var allAr = [sCharA,lcsChr,upChr,Nums];
   
   



   



     


    
   for(var i = 0; i < 1;){
      var pwLen =  window.prompt("Enter a number (8-128) for password length");
        if (isNaN(pwLen) || pwLen < 1 || pwLen > 128){
           alert("entry not valid");
           pwLenB = false;
         } else{
             pwLenB = true;
             i++;
           } 
    }

   for(var i = 0; i < 1;){
      var spChar = window.prompt("Will the password contain special characters ?...Y for yes N for no")
        if (spChar === "y"|| spChar === "Y" || spChar === "N" || spChar === "n"){
          spChar = true;
          i++;
          return("");
         } else{
          alert("entry not valid")
          spChar = false;
           }  
    }
      
    for(var i = 0; i < 1;){
      var lwrCs = window.prompt("Will the password contain lower case characters ?...Y for yes N for no")
        if (lwrCs === "y"|| lwrCs === "Y" || lwrCs === "N" || lwrCs === "n"){
          lwrCs = true;
          i++;
          return("");
         } else{
          alert("entry not valid")
          lwrCs = false;
           }  
    }
  
    for(var i = 0; i < 1;){
        var uprCs = window.prompt("Will the password contain Uppercase characters ?...Y for yes N for no")
          if (uprCs === "y"|| uprCs === "Y" ||  uprCs === "N" ||  uprCs === "n"){
            uprCs = true;
            i++;
            return("");
           } else{
             alert("entry not valid")
             uprCs = false;
             }   
    }
    
    for(var i = 0; i < 1;){
        var num = window.prompt("Will the password contain Numbers ?...Y for yes N for no")
          if (num === "y"|| num === "Y" || num === "N" || num === "n"){
            num = true;
            i++;
            return("");
           } else{
             alert("entry not valid")
             num = false;
             } 
    } 
    for(var x = 0; x < pwLen; x++) {
      for(var i = 0; i < dArr.length; i++) {
        if(dArr[i] == true) {
           passwordA.concat(allar[i][Math.floor(Math.random() * (allAr[i].length)+ 0)]);
          }
      }
    }
  return(passwordA);  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
