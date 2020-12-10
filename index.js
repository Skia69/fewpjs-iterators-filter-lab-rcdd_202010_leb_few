// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter((driverName) => driverName.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (drivers, partialName) => {
  let lengthOfName = partialName.length;
  return drivers.filter((driverName) => driverName.slice(0, lengthOfName) === partialName);
}

const matchName = (list, name) => {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}