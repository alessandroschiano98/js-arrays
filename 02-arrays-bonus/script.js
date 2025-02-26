const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log(arrayCopy);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0 ; i-- ){
  const teachersPosition = teachers [i];
  reversedTeachers.push(teachersPosition);
}

console.log(reversedTeachers, teachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for(let i = 0; i < teachers.length; i++) {
  const teachersPosition = teachers[i];
  if(teachersPosition.lenght >= 5) {
    longNames.push(teachersPosition);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

const edIndex = teachers.indexOf ("Ed");
console.log(edIndex);
teachers.splice(edIndex, 1);
console.log(teachers);