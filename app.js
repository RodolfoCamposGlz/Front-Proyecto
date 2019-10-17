
$(document).ready(function() {
//////////////////////////
$(function() {
    $( "#slider" ).slider({
min:0,
max:10000,
range:true,
values:[0,5000],
slide: function(event, ui) { $( "#d1" ).html("$"+ ui.values[0] ), $( "#d2" ).html("$"+ui.values[1] );} 
  });
  });
////////////////
})




// var slider = document.getElementById("myRange");
// var output = document.getElementById("value");


// output.innerHTML = slider.value;
// slider.oninput = function(){
//     output.innerHTML = this.value;
// }

// slider.addEventListener("mousemove", function(){
//     var x = slider.value;
//     var color = 'linear-gradient(90deg, rgb(117,252,117)'+ x + '%,rgb(214,214,214,214)' + x + '%)';
//     slider.style.background=color;
// })