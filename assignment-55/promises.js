// const response = fetch('https://reqres.in/api/users');
// console.log("🚀 ~ file: promises.js ~ line 2 ~ response", response)

// response.then((res)=>{
//         return res.json()
// }).then((data)=>{
// console.log("🚀 ~ file: promises.js ~ line 7 ~ response.then ~ data", data)
// })
// .catch((e)=>{
//     console.log(e);
// })


// Implementation of Promise
const fetch1 = async(num) => {
    const somePromise = new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve("It is Even Number");
      } else {
        reject("It is not Even");
      }
    });
    return somePromise;
  };


  const response = fetch1(4)
 
//  response.then((res)=>{
//      console.log(res);
//      const response = fetch1(6)
//      return response
//  }).then((res2)=>{
//  console.log("🚀 ~ file: promises.js ~ line 34 ~ response.then ~ res2", res2)

//  })
//  .catch((res)=>{
//      console.log(res);
//  })

