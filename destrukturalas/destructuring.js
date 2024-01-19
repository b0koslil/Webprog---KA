
// Feladat 1.
let car = ['Ford', 'Mustang', 2022, 'blue'];
let { brand, model, year, color } = car;

console.log(brand); 
console.log(model); 
console.log(year); 
console.log(color); 

// Kérdés 1.
// Milyen változóneveket lehet használni tömb esetén destrukturálás esetén? A változók sorrendje fontos-e?
// bármilyet lehet, fontos


// Feladat 2.
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };

let { title, author, publicationYear, language } = book;

console.log(title); 
console.log(author); 
console.log(publicationYear);
console.log(language);

// Kérdés 2.
// Milyen változóneveket lehet használni objektum esetén destrukturálás esetén? A változók sorrendje fontos-e?
// olyat ami megegyezik az objektuméval, nem fontos


// Feladat 3.
function printStudent({ name, age, grade, subjects }) {
    console.log(`Nég: ${name}, Kor: ${age} év, Jegy: ${grade}, Tantárgy:${subjects}`);
    }
    
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

printStudent(student);

