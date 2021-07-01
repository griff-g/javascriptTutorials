const menu = [
  {
    food: "pancakes",
    category: "breakfast",
  },
  {
    food: "eggs",
    category: "breakfast",
  },
  {
    food: "sandwich",
    category: "lunch",
  },
  {
    food: "soup",
    category: "lunch",
  },
  {
    food: "steak",
    category: "dinner",
  },
  {
    food: "pizza",
    category: "dinner",
  },
];

// let newArr=[]
// menu.forEach((n) => {
//   newArr.push(n.category);
// });

// let uniqueCat = new Set(newArr);
// uniqueCat = [...uniqueCat];
// console.log("🚀 ~ file: extras.js ~ line 52 ~ uniqueCat", uniqueCat);

// const sortedMenu = [];
// uniqueCat.forEach((category) => {
//   const sortedObj = {
//     category: category,
//     foods: [],
//   };
// //breakfast
//   menu.forEach((item) => {
//     if (item.category === category) {
//       sortedObj.foods.push(item.food);
//     }
//   });

//   sortedMenu.push(sortedObj);
// });
// console.log("🚀 ~ file: extras.js ~ line 72 ~ uniqueCat.forEach ~ sortedMenu", sortedMenu)

let newArr = [];
for (const n of menu) {
  newArr.push(n.category);
}
let uniqueCat = new Set(newArr);
uniqueCat = [...uniqueCat];

const sortedMenu = [];
for (const category of uniqueCat) {
  // console.log(category);
  const sortedObj = {
    category: category,
    foods: [],
  };
  for (const categoryValue of menu) {
    if (categoryValue.category === category) {
        sortedObj.foods.push(categoryValue.food)
    }
  }
  sortedMenu.push(sortedObj)
}
console.log(sortedMenu);