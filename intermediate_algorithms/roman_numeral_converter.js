
function convertToRoman(num) {
    var str = num.toString();
     var digits = str.split("");
     

// I don't think the switch is necessarily the way to go.
// As of right now in my thought process, it's the best attempt so far.

// the cases are not ints, because they're converted to strings previously to split.
     for (var i = 0; i < digits.length; i++){
       switch (digits[i]){
         case "1":
           return "I";
           break;
         case "2":
           return "II";
           break;
         case "3":
           return "III";
           break;
         case "4":
           return "IV";
           break;
         case "5":
           return "V";
           break;
         case "6":
           return "VI";
           break;
         case "7":
           return "VII";
           break;
         case "8":
           return "VIII";
           break;
         case "9":
           return "IX";
           break;
         default:
           return "Is this thing on?";
       }
         
       }
       
     
     
     
     
   }
   
   convertToRoman(36);
   