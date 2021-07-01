const persons = [
    {
    //   id: 1,
      name: "Bertie Yates",
      age: 29,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
    //   id: 2,
      name: "Hester Hogan",
      age: 32,
      image: "http://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
    //   id: 3,
      name: "Larry Little",
      age: 36,
      image: "http://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
    //   id: 4,
      name: "Sean Walsh",
      age: 34,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
    //   id: 5,
      name: "Lola Gardner",
      age: 29,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ];

//  {
//      image1:[],
//      image2:[]
//  }
// arr.forEach(()=>{})
  
  const newArr = (arr)=>{
    const newObj = {} 
    arr.forEach((element,i )=> {
          const newArr = element.image.split('/')
          const finalArr = newArr.slice(2);
        //   console.log(finalArr);
          newObj[`image${i}`]=  finalArr
         
      });
      return newObj
  }

console.log(newArr(persons));

  