function QuickSort(data) {
  if (data.length < 1) {
    return data;
  } else {
    return conquer(data);
  }

  function conquer(data) {
    var size = data.length - 1;
    return divide(data);

    function divide(data) {
      var leftArray = [];
      var rightArray = [];
      var pivot = data[size];
      for (var index = 0; index < size; index++) {
        value = data[index];
        if (value < pivot)
          leftArray.push(value);
        if (value > pivot)
          rightArray.push(value);
      }
      if (leftArray.length > 1)
        leftArray = QuickSort(leftArray);
      if (rightArray.length > 1)
        rightArray = QuickSort(rightArray);
      return leftArray.concat([pivot], rightArray);

    }
  }
}
module.exports = QuickSort;