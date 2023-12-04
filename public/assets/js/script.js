// $(window).scroll(function () {
//   if ($(document).scrollTop() > 100) {
//     $(".navbar").addClass("color-change");
//   } else {
//     $(".navbar").removeClass("color-change");
//   }
// });
let book=document.getElementById("book");
let author=document.getElementById("author");
let publisher=document.getElementById("publisher");
book.onclick=function(){
  inputElement.placeholder = "Enter Book Name";
}
author.onclick=function(){
  inputElement.placeholder = "Enter Author Name";
}
publisher.onclick=function(){
  inputElement.placeholder = "Enter Publisher Name";
}