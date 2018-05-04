// M = 1000
// D = 500
// C = 100
// L = 50
// X = 10
// V = 5
// I = 1

// It ain't pretty, but it's my own.


function convertToRoman(num) {
  var str = num.toString();
   var arr = [];
   var joined = "";
   var digits = str.split("");
   
   

   // If the parameter offered is thousand up to three thousand, because
   // I don't know what to do with 4000 or greater, and the challenge doesn't go that high
   // Looks like the characters get tricky when trying to show 5000 or higher.  Not sure how
   // to represent that on a standard keyboard.
   if (digits.length == 4){
     
    // Switch through the first digit for thousands
       switch (digits[0]){
         case "1":
           arr.push("M");
           break;
         case "2":
           arr.push("MM");
           break;
         case "3":
           arr.push("MMM");
           break;
         default:
           return "something broke";
       }
     
       // Switch through the second digit for hundreds
     switch (digits[1]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("C");
         break;
       case "2":
         arr.push("CC");
         break;
       case "3":
         arr.push("CCC");
         break;
       case "4":
         arr.push("CD");
         break;
       case "5":
         arr.push("D");
         break;
       case "6":
         arr.push("DC");
         break;
       case "7":
         arr.push("DCC");
         break;
       case "8":
         arr.push("DCCC");
         break;
       case "9":
         arr.push("CM");
         break;
       default:
         return "something went wrong";
         
     }
     // Switch through the third digit for tens
     switch (digits[2]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("X");
         break;
       case "2":
         arr.push("XX");
         break;
       case "3":
         arr.push("XXX");
         break;
       case "4":
         arr.push("XL");
         break;
       case "5":
         arr.push("L");
         break;
       case "6":
         arr.push("LX");
         break;
       case "7":
         arr.push("LXX");
         break;
       case "8":
         arr.push("LXXX");
         break;
       case "9":
         arr.push("XC");
         break;
       default:
         return "something went wrong";
         
     }
     
     // Switch through the fourth digit for one through nine
     switch (digits[3]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("I");
         break;
       case "2":
         arr.push("II");
         break;
       case "3":
         arr.push("III");
         break;
       case "4":
         arr.push("IV");
         break;
       case "5":
         arr.push("V");
         break;
       case "6":
         arr.push("VI");
         break;
       case "7":
         arr.push("VII");
         break;
       case "8":
         arr.push("VIII");
         break;
       case "9":
         arr.push("IX");
         break;
       default:
         return "Is this thing on?";
     }
     
     
     // Pattern repeats for numbers in the hundreds
   } else if (digits.length == 3){
     switch (digits[0]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("C");
         break;
       case "2":
         arr.push("CC");
         break;
       case "3":
         arr.push("CCC");
         break;
       case "4":
         arr.push("CD");
         break;
       case "5":
         arr.push("D");
         break;
       case "6":
         arr.push("DC");
         break;
       case "7":
         arr.push("DCC");
         break;
       case "8":
         arr.push("DCCC");
         break;
       case "9":
         arr.push("CM");
         break;
       default:
         return "something went wrong";
         
     }
     
     switch (digits[1]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("X");
         break;
       case "2":
         arr.push("XX");
         break;
       case "3":
         arr.push("XXX");
         break;
       case "4":
         arr.push("XL");
         break;
       case "5":
         arr.push("L");
         break;
       case "6":
         arr.push("LX");
         break;
       case "7":
         arr.push("LXX");
         break;
       case "8":
         arr.push("LXXX");
         break;
       case "9":
         arr.push("XC");
         break;
       default:
         return "something went wrong";
         
     }
     
     switch (digits[2]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("I");
         break;
       case "2":
         arr.push("II");
         break;
       case "3":
         arr.push("III");
         break;
       case "4":
         arr.push("IV");
         break;
       case "5":
         arr.push("V");
         break;
       case "6":
         arr.push("VI");
         break;
       case "7":
         arr.push("VII");
         break;
       case "8":
         arr.push("VIII");
         break;
       case "9":
         arr.push("IX");
         break;
       default:
         return "Is this thing on?";
     }
     

     // Pattern repeats for numbers in the tens
   } else if (digits.length == 2){
     switch (digits[0]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("X");
         break;
       case "2":
         arr.push("XX");
         break;
       case "3":
         arr.push("XXX");
         break;
       case "4":
         arr.push("XL");
         break;
       case "5":
         arr.push("L");
         break;
       case "6":
         arr.push("LX");
         break;
       case "7":
         arr.push("LXX");
         break;
       case "8":
         arr.push("LXXX");
         break;
       case "9":
         arr.push("XC");
         break;
       default:
         return "something went wrong";
         
     }
     
     switch (digits[1]){
       case "0":
         arr.push("");
         break;
       case "1":
         arr.push("I");
         break;
       case "2":
         arr.push("II");
         break;
       case "3":
         arr.push("III");
         break;
       case "4":
         arr.push("IV");
         break;
       case "5":
         arr.push("V");
         break;
       case "6":
         arr.push("VI");
         break;
       case "7":
         arr.push("VII");
         break;
       case "8":
         arr.push("VIII");
         break;
       case "9":
         arr.push("IX");
         break;
       default:
         return "Is this thing on?";
     }
  
  // Pattern repeats for numbers less than ten
    } else {
     switch (digits[0]){
       case "1":
         arr.push("I");
         break;
       case "2":
         arr.push("II");
         break;
       case "3":
         arr.push("III");
         break;
       case "4":
         arr.push("IV");
         break;
       case "5":
         arr.push("V");
         break;
       case "6":
         arr.push("VI");
         break;
       case "7":
         arr.push("VII");
         break;
       case "8":
         arr.push("VIII");
         break;
       case "9":
         arr.push("IX");
         break;
       default:
         return "Is this thing on?";
     }
   
   }
   
   // combine the array of roman numerals into a string and return.
   return arr.join("");
   
 }
 
 convertToRoman(2014);