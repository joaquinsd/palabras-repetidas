// converts the first letter of the given string to upper- and the rest to
// lowercase
function capitalize(_str) {
  return _str.charAt(0).toUpperCase() + _str.substr(1).toLowerCase();
}

// separates the given text by the given separator, removing parts that match
// the given regular expression
function separateText(_text, _separator, _regexp) {
  return _text.replace(_regexp, '').toLowerCase().split(_separator).sort();
}

// counts distinct characters in given array
function countCharacters(_characters, _ignoreRegexp) {
  let acum = {}

  _characters.forEach(character => {
    if (character != '') {
      acum[character] = (acum[character] || 0) + 1;
    }
  });

  return acum;
}

// appends the content of the given array to the given node
function printResults(_node, _collection, _label) {
  const resultNode = document.getElementById(_node);
  resultNode.innerHTML += `<h2>${capitalize(_label) + 's'}</h2>`;
  for (character in _collection) {
    if (_collection[character] == 1) {
      resultNode.innerHTML += `<p><strong>${capitalize(_label)}: </strong> <span>${capitalize(character)} ${_collection[character]} time</span></p>`;
    }
    else {
      resultNode.innerHTML += `<p><strong>${capitalize(_label)}: </strong> <span>${capitalize(character)} ${_collection[character]} times</span></p>`;
    }
  }
}

// *************
// Main Program
// *************

const text = document.getElementById('texto-entrada').textContent;
const regexpforText = /[^A-Za-z]/gm  //With this regular expression, we search for everything that is not text, being whitespaces, dots, commas, dotcomma, etc. the gm is for it to be global and multiline
const regexpforWord = /[^A-Za-z]\s/gm  //With this regular expression, we search for everything that is not text, being whitespaces, dots, commas, dotcomma, etc. the gm is for it to be global and multiline
const regexpToIgnore = /\s/ // With this reg exp we search for whitespaces

// Part I: Counting Letters
const letters = separateText(text, '', regexpforText);
printResults('resultados', countCharacters(letters, regexpToIgnore), 'letter');

// Part II: Counting Words
const words = separateText(text, ' ', regexpforWord);
printResults('resultados', countCharacters(words, regexpToIgnore), 'word');
