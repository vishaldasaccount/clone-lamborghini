// text section-1 start
var text = "JOIN US TO DISCOVER MORE";

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

// slider image section-2 start

const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
// end