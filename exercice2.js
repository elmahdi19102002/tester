const createNew = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(createNew("juju"));

const concString = (a, b) => a.slice(1) + b.slice(1);

console.log(concString("mehdi", "zeemed"));

const nearest = (a, b) => (100 - a > 100 - b ? b : a);
console.log(nearest(50, 60));
