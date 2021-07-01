// Implementation of Promise
const callData = async () => {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json()
  console.log("🚀 ~ file: async.js ~ line 5 ~ fetch ~ data", data)
};

// console.log(fetch());
callData()
