  // "Give me any array, and a callback, and I'll execute the callback for each item of the array"
function forEach(arr, callback) {
  // write for loop that to go through all elements in the points array
  for (var i = 0; i < arr.length; i++){
    callback(arr[i]);

  }


}
