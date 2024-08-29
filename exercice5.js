const paragraph =
  document.querySelector("p"); /* Sélectionne le texte dans la balise <p> */
if (paragraph) {
  paragraph.innerHTML = paragraph.innerText
    .split(" ")
    .map((word) =>
      word.length > 8
        ? `<span style="background-color: yellow">${word}</span>`
        : word
    )
    .join(" ");
}

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.innerText = "click here";
document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

if (paragraph) {
  paragraph.innerHTML = paragraph.innerHTML.split(".").join("</p><p>");
}

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = paragraph?.innerText.split("").length;
const wordCountElem = document.createElement("div");
wordCountElem.innerText = `${wordCount} words `;
document.body.insertBefore(wordCountElem, paragraph);
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
