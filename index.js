// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };

 newDriver[key] = value;

 return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver}
  return delete newDriver.key
}

function destructivelyDeleteFromDriverByKey(driver, key) {

  return delete driver[key]
}
