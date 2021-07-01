const persons = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image: "http://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image: "http://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

//You have been giving a number say 10, check if its even or not , if even then resolve
//the promise by returning the array to it and display a message when the promise is not resolved

const num = 100;
const fetch = (num) => {
  const somePromise = new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(persons);
    } else {
      reject("the number is not even");
    }
  });
  return somePromise;
};

fetch(num)
  .then((res) => {
    // res.forEach(element=>{
    // if(element.age <= 30){
    //   console.log(element.name);    
    // }
  // })
  let newArr = res.filter((person)=>per)

  console.log(newArr);
    
  })
  .catch((error) => {
    console.log(error);
  });
