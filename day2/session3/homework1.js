const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = arr => {
  return new Promise((resolve, reject) => {
    resolve(arr.map(x => x.toUpperCase()));
  });
};

const sortWords = arr => {
  return new Promise(resolve => {
    resolve(arr.sort());
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// makeAllCaps(complicatedArray)
//   .then(sortWords)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// const makeAllCaps = arr => {
//   return new Promise((resolve, reject) => {
//     resolve(
//       arr.map(x => {
//         if (typeof x !== "string") {
//           reject("not a string!");
//         } else return x.toUpperCase();
//       })
//     );
//   });
// };
