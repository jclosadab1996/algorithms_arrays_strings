var isAlienSorted = function (words, order) {
  // Crear un mapa del diccionario alienigena
  map_dictionary = new Map();
  for (let i = 0; i < order.length; i++) {
    map_dictionary[order[i]] = i;
  }

  //Revisar el orden de las palabras
  for (let i = 1; i < words.length; i++) {
    // O(n)
    if (compare(words[i - 1], words[i]) === false) {
      return false;
    }
  }
  return true;
};

// O(length de la palabra mas larga)
var compare = function (words1, words2) {
  const length = Math.min(words1.length, words2.length);
  for (let i = 0; i < length; i++) {
    if (map_dictionary[words1[i]] < map_dictionary[words2[i]]) {
      return true;
    }
    if (map_dictionary[words1[i]] > map_dictionary[words2[i]]) {
      return false;
    }
  }
  return words1.length <= words2.length;
};
