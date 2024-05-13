var slideIndex1 = 1;
showDivs(slideIndex1);

function plusDivs(n) {
  showDivs(slideIndex1 += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex1-1].style.display = "block";
}