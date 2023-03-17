// fetch("http://example.com/movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));



//PROMISE

// let promise = new Promise(function (resolve, reject) {
//   resolve("Pesma izdata");
//   reject("Greska se desila");
// });

// {
//   state: "pending",
//   result: undefined,
// }

// {
//   state: "fullFiled",
//   result: value
// }

// {
//   state: "rejected",
//   result: error
// }









// let promise = new Promise(function (resolve, reject) {


//   setTimeout(() => resolve("done"), 1000)
// });


// console.log(promise);



function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve("3 sec after"), ms,));
}

delay(3000).then((res) => alert(res));