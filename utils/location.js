const locations = require(`../${process.env.STORY}/locations`)

const findLocation = (key) => {
  const searchValue = key.trim().toLowerCase();
  for (let x of locations) {
    for (let location of x) {
      if (location.name === searchValue || location.id === searchValue) {
        return location;
      } else if (location.aliases.indexOf(searchValue) > -1) {
        return location;
      }
    }
  }
};

module.exports = {
  findLocation,
};