// JSON: Number, boolean, null, array, object
// Encode    / Decode
// Stringify / Parse
// Stringify : chuyển từ js type => JSON
// Parse     : chuyển từ JSON => js type

const json = '1';                               //number
const json1 = 'true';                           //boolean
const json2 = 'null';                           //null
const json3 = '["java", "PHP"]'                 //array
const json4 = '{"name": "jerry", "age": 20}'    // object
const json5 = '"ákgjahksjh"';                   //string


console.log(typeof(JSON.parse(json)))
console.log(JSON.parse(json1))
console.log(JSON.parse(json2))
console.log(JSON.parse(json3))
console.log(JSON.parse(json4))

console.log(JSON.stringify(json4));
