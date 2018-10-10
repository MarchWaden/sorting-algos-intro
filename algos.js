module.exports.bubbleSort = (arr) => {
  is_sorted = false;
  current_number = 0;
  while(is_sorted == false){
    is_sorted = true;
    for(i=0;i<arr.length-1;i++){
        if (arr[i] > arr[i+1]){
          current_number = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = current_number;
          is_sorted = false;
          console.log(arr);
        }
    }
  }
    // in bubble sort, we go through the array and compare each number to the next one
    // if the number is greater than the next one, swap them
    // this way, the greatest number will "bubble" up to the end of the array
    // repeat this process until the entire array has been sorted
    return arr;
}

module.exports.insertionSort = (arr) => {
    // with insertion sort, we start from the beginning of the array
    // we can consider the first number our "sorted" part of the array
    // then, as we look at each consecutive number, we "insert" that number into the sorted part of the array
    // at each number, we send it towards the front until it is in the right spot
    let is_sorted = false;
    while(is_sorted = false){
      is_sorted = true;
      for(i=0;i<arr.length;i++){
        let insert = i;
        current_max = arr[i];
        for(j=i;i<arr.length;i++){
          if (arr[j] < current_max){
            while(arr[insert] < arr[j]){
              insert++;
            }
            arr.splice(insert,0,arr[j]);
            arr.splice(j+1,1);
          }
        }
      }
    }
    return arr;
}
