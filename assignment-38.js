//Create a function that takes an array and returns the types of values (data types) in a new array.

// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

const arrayValuesTypes = (arr) => {
    let finalArr = [];
  for (let i = 0; i < arr.length; i++) {

    finalArr.push(typeof arr[i])
  }

  return finalArr
};

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
