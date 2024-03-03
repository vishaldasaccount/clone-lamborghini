// text section-1 start
var text = "DRIVING HUMANS";

 function displayText(index) {
   if (index <= text.length) {

     var charSpan = document.createElement("span");
     charSpan.textContent = text.charAt(index - 1);
     charSpan.classList.add("hidden-char");
     
     document.getElementById("display").appendChild(charSpan);
     
     void charSpan.offsetWidth;
     
     charSpan.style.opacity = "1";
     
     index++;
     setTimeout(function() { displayText(index); }, 100);
   }
 }

 window.onload = function() {
   displayText(1);
 };
// end