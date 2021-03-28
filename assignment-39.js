//Create a function that returns an array of all the integers between two given numbers start and end.

// if the start and end are equal return an empty array.
//Examples:-

//rangeOfNum(2, 4) ➞ [3]
//rangeOfNum(5, 9) ➞ [6, 7, 8]
//rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10];

const rangeOfNum = (start, end) => {
  let finalArr = [];
  for (let i = start; i < end; i++) {
    if (i === start) continue;
    finalArr.push(i);
  }

  //   finalArr.shift()
  return finalArr;
};
console.log(rangeOfNum(2, 11));
