const friends = ['abul', 'babul', 'kabul', 'boka', 'salith', 'jamy', 'showmik', 'someone', 'rifat'];


//checks if the element exist in array
console.log(friends.includes('boka'));
console.log(friends.includes('kabli'));

if (friends.includes('salith')) {
          console.log('pera nai')
}
else if (friends.includes('kabul')) {
           console.log('pera ase')
}
else {
          console.log('inbox me')
}
console.log(friends.indexOf('salith')); // locate the array index
console.log(friends.indexOf('nai')); // if -1 , nai
let nums = [];

console.log(Array.isArray(friends));
console.log(Array.isArray(nums));