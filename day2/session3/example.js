const roomIsCleaned = true;

const cleanRoom = isCleaned =>
  new Promise((resolve, reject) => {
    if (isCleaned) {
      resolve("room cleaned");
    } else reject("room not cleaned");
  });

const buyIceCream = message =>
  new Promise((resolve, reject) =>
    message === "room cleaned"
      ? resolve(message + " " + "i have bought an ice cream")
      : reject("failed bought an ice cream")
  );

const fixCar = message =>
  new Promise(resolve => resolve(message + " " + "fixed a car"));

cleanRoom(roomIsCleaned)
  .then(buyIceCream)
  .then(fixCar)
  .then(mes => console.log(mes))
  .catch(error => console.log(error));
