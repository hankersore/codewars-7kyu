// 1. https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

// 2. https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

function noOdds(arr) {
  let result = [];
  for (let i =0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(noOdds([1, 2, 3, 4, 5, 6]));

// 3. https://www.codewars.com/kata/56d19b2ac05aed1a20000430

function betweenExtremes(numbers) {
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return max - min;
}

console.log(betweenExtremes([23, 3, 19, 21, 16]));


// 4. https://www.codewars.com/kata/5250a89b1625e5decd000413

function flatten(arr) {
  return arr.flat();
}

console.log(flatten([[[1,2,3]]]));


// 5. https://www.codewars.com/kata/56853c44b295170b73000007

function isSquare (arr) {
 if (arr.length === 0) {
  return undefined;
 }
  for (let i = 0; i < arr.length; i++) {
    if (Math.sqrt(arr[i]) % 1 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isSquare([1, 4]));

// 6. https://www.codewars.com/kata/5783d8f3202c0e486c001d23

function toNum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Number(arr[i]));
  }
  return result;
}

console.log(toNum(["1", "2", "3"]));

// 7. https://www.codewars.com/kata/5813d19765d81c592200001a

function dont(start, end) {
 let count = 0;
  for (let i = start; i <= end; ++i) {
    if (!i.toString().includes("5")) {
       count++;
    }
  }
  return count;
}

console.log(dont(1, 6));

// 8. https://www.codewars.com/kata/55de6173a8fbe814ee000061

function unusedDigits(...number) {
  let numbers = number.join();
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		.filter(x => !numbers.includes(x))
		.join('');
}

console.log(unusedDigits(12, 34, 56, 78));

// 9. https://www.codewars.com/kata/583ebb9328a0c034490001ba

function duplicateElements(m, n) {
  let result = 0;
  for (let i = 0; i < m.length ; i++) {
     for (let j = 0; j < n.length ; j++) {
    if (m[i]=== n[j]) {
      result++;
    }
  }
  }
  if (result === 0) {
    return false;
  }
  else {
    return true;
  }
}

console.log(duplicateElements([1, 2, 3], [5, 4, 5]));

// 10. https://www.codewars.com/kata/5809c661f15835266900010a

function doubleEveryOther(a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      result.push(a[i]);
    }
    else {
      result.push(a[i]*2)
    }
  }
  return result;
}

console.log(doubleEveryOther([1, 2, 3, 4]));

// 11. https://www.codewars.com/kata/583af10620dda4da270000c5

function mergeArrays(a, b) {
 let result = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) {
      result.push(a[i]);
    }
    if (i < b.length) {
      result.push(b[i]);
    }
  }
  return result;
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'f'], [1, 2, 3]));

// 12. https://www.codewars.com/kata/539ee3b6757843632d00026b

function indexOfCapitals(str) {
  const capitals = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  let result = [];
  for (let i = 0; i < capitals.length; i++) {
    for (let j = 0; j < str.length; j++) {
    if (str[j] === capitals[i]) {
      result.push(j);
    }
  }
  }
  return result.sort((a, b)=> a-b);
}


console.log(indexOfCapitals("CoDeWaRs"));

// 13. https://www.codewars.com/kata/544a54fd18b8e06d240005c0

function min(arr, toReturn) {
    let minValue = Math.min(...arr);
    if (toReturn === "value") {
      return minValue;
    }
    else if (toReturn === "index") {
      return arr.indexOf(minValue);
    }
}

console.log(min([1, 2, 3], "index"));

// 14. https://www.codewars.com/kata/59f7fc109f0e86d705000043

function divisibleByThree(str) {
let sum = 0
for (let i = 0; i < str.length; i++) {
  sum += Number(str[i])
}
if (Number.isInteger(sum / 3)) {
  return true;
}
else {
  return false;
}
}

console.log(divisibleByThree("123"));

// 15. https://www.codewars.com/kata/5ace2d9f307eb29430000092

function modifyMultiply (str,loc,num) {
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    if (loc === i) {
      return new Array(num).fill(split[i]).join("-");
    }
  }
} 

console.log(modifyMultiply("this is a string", 3, 5));

// 16. https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
      return "invalid string"
    }
    let evens = [];
    for (let i = 1; i < string.length; i += 2) {
      evens.push(string[i]);
    }
    return evens;
}
console.log(evenChars("abcd"));

// 17. https://www.codewars.com/kata/5729fa716c7d26dc84000040

function arrayLowerCase(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" ) {
      result.push(arr[i].toLowerCase());
    }
    else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(arrayLowerCase(['HellO', 3]));

// 18. https://www.codewars.com/kata/57cec34272f983e17800001e

function popShift(str) {
  let result = ['', '', ''];
  while (str.length > 1) {
    result[0] = str.charAt(str.length - 1) + result[0];
    result[1] += str.charAt(0);
    str = str.slice(1, str.length - 1);
  }
  result[2] = str;
  return result;
}

console.log(popShift("exampletesthere"));

// 19. https://www.codewars.com/kata/575690ee34a34efb37001796

function multipleSplit(string, delimiters=[]){
  let result = [string];
  for (let delimiter of delimiters) {
    let temp = [];
    for (let str of result) {
      temp.push(...str.split(delimiter));
    }
    result = temp;
  }

  return result;
}

console.log(multipleSplit("hello+world-!", ["+", "-"]));

// 20. https://www.codewars.com/kata/54ff3102c1bad923760001f3

function countVowels(string) {
  string = string.toLowerCase();
  let count = 0;
  for (let char of string) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));

// 21. https://www.codewars.com/kata/554b4ac871d6813a03000035

function maxMin(str) {
  let arr = str.split(" ").map(Number);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max + " " + min;
}

console.log(maxMin("1 2 3 4 5"));

// 22. https://www.codewars.com/kata/56747fd5cb988479af000028

function middleChar(word) {
  let middleIndex = Math.floor(word.length / 2);
  if (word.length % 2 === 1) {
    return word[middleIndex];
  } else {
    return word.slice(middleIndex - 1, middleIndex + 1);
  }
}

console.log(middleChar("albison"));

// 23. https://www.codewars.com/kata/58fa273ca6d84c158e000052

function digits(n) {
  let numString = String(n);
  return numString.length;
}

console.log(digits(66));

// 24. https://www.codewars.com/kata/55b051fac50a3292a9000025

function filterString(string) {
  let numbers = [];
  let currentNumber = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char >= "0" && char <= "9") {
      currentNumber += char;
    }
    else if (currentNumber !== "") {
      numbers.push(Number(currentNumber));
      currentNumber = "";
    }
  }
  if (currentNumber !== "") {
    numbers.push(Number(currentNumber));
  }
  return numbers;
}

console.log(filterString("ahbv56ifdvjn56"));

// 25. https://www.codewars.com/kata/553e8b195b853c6db4000048

function isUnique(string) {
  let uniqueChars = new Set();
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (uniqueChars.has(char)) {
      return false;
    }
    uniqueChars.add(char);
  }
  return true;
}

console.log(isUnique("abcd"));

// 26. https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  let reversedString = words.join(" ");
  return reversedString;
}

console.log(reverseWords("This is an example!"));

// 27. https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function ending(str, end) {
  let endingLength = end.length;
  let subString = str.substr(-endingLength);
  return subString === end;
}

console.log(ending("abc", "bc"));

// 28. https://www.codewars.com/kata/59c5f4e9d751df43cf000035

function longest(str) {
  let maxLen = 0;
  let currLen = 0;
  const vowels = 'aeiou';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (vowels.includes(c)) {
      currLen++;
    } else {
      currLen = 0;
    }
    if (currLen > maxLen) {
      maxLen = currLen;
    }
  }
  return maxLen;
}

console.log(longest("codewariors"));

// 29. https://www.codewars.com/kata/570f6436b29c708a32000826

function first(string) {
  let charCounts = {};
  for (let i = 0; i < string.length; i++) {
      let char = string[i];
      charCounts[char] = charCounts[char] || 0;
      charCounts[char]++;
  }
  for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (charCounts[char] === 1) {
          return char;
      }
  }
  return null;
}

console.log(first("teeeef"));

// 30. https://www.codewars.com/kata/55b4f9906ac454650900007d

function splitString(str, n) {
  if (typeof n !== 'number' || n <= 0) {
      return [];
  }
  if (typeof str !== 'string' || str.length === 0) {
      return [];
  }
  let parts = [];
  for (let i = 0; i < str.length; i += n) {
      parts.push(str.substring(i, i + n));
  }
  return parts;
}

console.log(splitString("codewars", 2));