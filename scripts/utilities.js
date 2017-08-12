/*
1. Write a function named `forEach` in the utilities.js file.
For educational purposes, DO NOT use the built-in `Array.prototype.forEach` function mentioned in the callback resource.
The goal is to write your own function named `forEach`.
It should:
a. Use a loop to go through all elements in the points array.
b. Execute a callback for each element.

2. Replace the for loop in the animatePoints function with a forEach block and confirm that the selling points still animate properly.
*/

// "Give me any array, and a callback, and I'll execute the callback for each item of the array"
function forEach(arr, callback) {
  // write for loop that to go through all elements in the points array
  for (var i = 0; i < arr.length; i++){
    callback(i);

  }


}



/*var animatePoints = function(points) {

     var revealPoint = function(index) {
         points[index].style.opacity = 1;
         points[index].style.transform = "scaleX(1) translateY(0)";
         points[index].style.msTransform = "scaleX(1) translateY(0)";
         points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
     };

     for (var i = 0; i < points.length; i++){
         revealPoint(i);
     }

 }; */
