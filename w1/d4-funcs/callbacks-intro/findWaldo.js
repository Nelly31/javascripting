const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
};

const actionWhenFound = function(indexOfWaldo) {
  console.log(`Found Waldo at index ${indexOfWaldo}!`);
};

findWaldo(["Alice", "Bob", "June", "Waldo", "Winston", "Scar"], actionWhenFound);