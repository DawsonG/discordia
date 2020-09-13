const findInArray = (arr, field, value) => {
  for (let item of arr) {
    if (item[field] === value) return item;
  }
};

const findInObjects = (obj, field, value) => {
  const arr = Object.values(obj);
  return findInArray(arr, field, value);
};

module.exports = {
  findInArray,
  findInObjects,
};