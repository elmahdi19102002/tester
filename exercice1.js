/* is Equalto100 c'est une arrow function */
const isEqualto100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqualto100(50, 50));
console.log(isEqualto100(10, 50));
console.log(isEqualto100(10, 100));

const getFileEtension = (str) => str.slice(str.lastIndexOf("."));
/* La méthode slice() extrait une partie d'une chaîne de caractères, en commençant à l'indice spécifié.
Si aucun point n'est trouvé (c'est-à-dire si lastIndexOf() retourne -1), slice(-1) renverra simplement le dernier caractère de la chaîne.
La méthode lastIndexOf() renvoie l'indice (la position) de la dernière occurrence du caractère spécifié, ici un point ".", 
dans la chaîne de caractères str. */

console.log(getFileEtension("file.html"));
console.log(getFileEtension("file.gestion.ts"));

const replaceAlphabet = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

/*La méthode split("") divise la chaîne de caractères str en un tableau de caractères individuels.
 La méthode charCodeAt(0) renvoie le code Unicode (ou code ASCII pour les caractères standard) du caractère spécifié
 La méthode fromCharCode() convertit un code Unicode en son caractère correspondant. */

console.log(replaceAlphabet("mmmm"));
console.log(replaceAlphabet("abcd"));

const Datetoday = (date = new Date()) => {
  let days = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${days}/${month}/${year}`;
};

/* pour afficher une variable on utilise  `  et pas "" */

console.log(Datetoday());

const addNew = (str) => {
  let tab = str.split("");
  if (tab[0] === "N" && tab[1] === "e" && tab[2] === "w") {
    return str;
  }
  return "New " + str;
};

console.log(addNew("New"));
console.log(addNew("era"));

const addNew2 = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);
console.log(addNew2("New!"));
console.log(addNew2("era"));
