const cars = require("./data");

const getCars = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(cars);
    }, 2000);
  })
);

module.exports = { getCars }

