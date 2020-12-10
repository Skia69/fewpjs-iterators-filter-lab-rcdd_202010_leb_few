// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter((driverName) => driverName.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (drivers, name) => {
  let lengthOfName = name.length;
  return drivers.filter((driverName) => driverName.slice(0, lengthOfName) === name)
}

const matchName = (drivers, name) => {
  return drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());
}