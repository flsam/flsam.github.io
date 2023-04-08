var numSlideShows = 8;
var slideIndex = [];
var offset = 4;
for (var i = offset; i < numSlideShows; i++) {
  slideIndex[i] = 1;
  showDivs(i, slideIndex[i]);
}

function plusDivs(i, n) {
  showDivs(i, slideIndex[i] += n);
}

function showDivs(i, n) {
  var x = document.getElementsByClassName("mySlides" + i);
  if (n > x.length) {slideIndex[i] = 1}    
  if (n < 1) {slideIndex[i] = x.length}
  for (var j = 0; j < x.length; j++) {
     x[j].style.display = "none";  
  }
  x[slideIndex[i]-1].style.display = "block";  
}
