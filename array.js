

// Nối mảng : concat()

// MAP: chứa các cặp khóa giá trị: key => value

// Method	    Description
// new Map()	Creates a new Map
// set()	    Sets the value for a key in a Map
// get()	    Gets the value for a key in a Map
// delete()	    Removes a Map element specified by the key
// has()	    Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map

// Property	Description
// size	    Returns the number of elements in a Map


const courses = new Map([       // create a new Map
    ["lenguage", "English"],
    ["subject", "math"],
    ["poin", 1200]
]);

courses.set('level', 'hard');   // add a element to array map

console.log(courses.get('lenguage'));
console.log(courses.get('subject'));
console.log(courses.get('poin'));
console.log(courses.get('level'));
console.log(courses);

console.log(courses.size);  // quantity element of the course

console.log(courses.has("poin"));   // check element exists or not

console.log(courses.delete("poin"));   // delete a element of map


// SET: là tập hợp các giá trị duy nhất. Mỗi giá trị chỉ xảy ra 1 lần trong tập hợp

// Method	    Description
// new Set()	Creates a new Set
// add()	    Adds a new element to the Set
// delete()	    Removes an element from a Set
// has()	    Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	    Returns an iterator with all the values in a Set

// Property	Description
// size	    Returns the number of elements in a Set

const lenguages = new Set([     // create a new set
    ['english', 'math', 'physic'],
]);

console.log(lenguages);

lenguages.add('vietnamese')     // add a new element to Set

lenguages.delete('vietnamese')  // delete a element from a Set

lenguages.has('english')        // check element is exist. return true or false

let result = '';
lenguages.forEach(function(value) { // Invokes a callback for each element in the Set
    result+=value;
})
console.log(result);

console.log(lenguages.values());    // return with all value in a Set