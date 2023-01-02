// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

// description og lastindex method

// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string. The lastIndexOf() method searches the string from the end to the beginning. The lastIndexOf() method returns the index from the beginning (position 0).

// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

// The lastIndexOf() method searches the string from the end to the beginning.

// The lastIndexOf() method returns the index from the beginning (position 0).

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() method is case sensitive.

// Ans
// var str = "Departed Train";
// var index = str.lastIndexOf("ed Tr");
// console.log(index);
// console.log("Departed Train before another Train".lastIndexOf("Train"));

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet", 100);
// console.log(result);

// index of property
// var s = ["prajwal", 1, 2, "zingare", "prajwal"];
// console.log(s.indexOf("zingare"));
// console.log(s.lastIndexOf("prajwal"));

// let a = "prajwal is web developer,web devloper";
// console.log(a.lastIndexOf("web"));
// console.log(a.lastIndexOf("w"));
//last index of means last occurence of specified value in stiring.
let a = "Two writers collaborated on the script for the film.";
console.log(a.lastIndexOf("script"));
