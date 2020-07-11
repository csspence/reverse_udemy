/*
JavaScript Algorithms and Data Structures Masterclass

reverse
Write a recursive function called reversse which accepts a string and returns a new string in reverse.
*/

const reverse = (str) => {
  let newStr = str.slice(0, str.length - 1)
  let revStr = str[str.length - 1];
  if(str.length === 1) {
    return str;
  } else {
    return revStr + reverse(newStr);
  }
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'