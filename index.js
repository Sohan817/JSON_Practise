// const data = require("./friends_data.json");
// console.log(data);
//Access
// data.friends[0].name

// Delete
// delete data.friends[0].name;

//Change Value
// data.friends[0].name = "Nadim"

// const data = require("./friends_data.json");
// console.log(data.Student_info[1].languages[2]);

//loop

// for (var x in data) {
//   console.log(x);
//   console.log(data[x]);
// }

//Convertion
const data = {
  name: "Sohan",
  age: 27,
};
console.log(JSON.stringify(data));

console.log(
  JSON.parse(`{
    "name": "Sohan",
    "age": 27
  }`)
);
