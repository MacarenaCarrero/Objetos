//Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: "John",
  surname: "Doe",
  age: 25,
  hobbies: ["leer", "tocar la guitarra", "pasear con las cabras"],
  pets: [
    { name: "Max", type: "perro" },
    { name: "Whiskers", type: "gato" },
  ],
  address: {
    street: "123 Main Street",
    city: "Gotham",
    state: "California",
    postalCode: "12345",
    country: "USA",
  },
  phone: "+1234567890",
  email: "johndoe@example.com",
  occupation: "Ingeniero de software",
  education: "Master en ciencia de datos",
};

console.log(
  `Me llamo ${user.name} ${user.surname} , tengo ${user.age}. Me gusta ${user.hobbies[0]}, ${user.hobbies[1]} y  ${user.hobbies[2]}. Tengo un perro llamado ${user.pets[0].name} y un gato llamado ${user.pets[1].name}. Vivo en ${user.address.country}, os dejo la dirección para que me envíes regalitos : ${user.address.state}, (${user.address.city}), ${user.address.street} ${user.address.postalCode}.Os dejo mi tlf pero no me llameis, tlf: ${user.phone}, prefiero que me envies un email ${user.email}. Suelo estar muy ocupado con mi trabajo de ${user.occupation} y un ${user.education}. Besis. `
);

//Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const dataNumbers = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: [], // número + 2
    },
    thirdFloor: {
      numbersDouble: [], // número * 2
    },
  },
  fourthFloor: {
    numbersDividedBy2: [], // número / 2
  },
  fifthFloor: {
    onlyEven: [], // Números pares
    onlyOdd: [], //   Números impares
  },
};

for (const number of dataNumbers.numbers) {
  dataNumbers.firstFloor.secondFloor.numbersPlus2.push(number + 2);
  dataNumbers.firstFloor.thirdFloor.numbersDouble.push(number * 2);
  dataNumbers.fourthFloor.numbersDividedBy2.push(number / 2);

  if (number % 2 === 0) {
    dataNumbers.fifthFloor.onlyEven.push(number);
  } else {
    dataNumbers.fifthFloor.onlyOdd.push(number);
  }
}

console.log(dataNumbers);

// - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const dataStrings = {
  firstFloor: {
    vowels: [], // Vocales
  },
  secondFloor: {
    consonants: [], // Consonantes
  },

  fourthFloor: {
    asciiCode: [], // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [], // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: "",
  },
};

const classifySentence = (sentence) => {
  for (const letter of sentence) {
    const vowels = "aeiou";
    if (vowels.includes(letter)) {
      dataStrings.firstFloor.vowels.push(letter);
    } else if (letter !== " ") {
      dataStrings.secondFloor.consonants.push(letter);
    }
  }

  for (const letter of sentence) {
    dataStrings.fourthFloor.asciiCode.push(
      sentence.charCodeAt(sentence.indexOf(letter))
    );
  }

  const words = sentence.split(" ");
  console.log(words);
  for (const word of words) {
    dataStrings.fifthFloor.wordsInUppercase.push(word.toUpperCase());
    dataStrings.fifthFloor.wordsInLowercase.push(word.toLowerCase());
  }

  let secretCode = "";

  secretCode = sentence.replaceAll("a", 1);
  secretCode = secretCode.replaceAll("e", 2);
  secretCode = secretCode.replaceAll("i", 3);
  secretCode = secretCode.replaceAll("o", 4);
  secretCode = secretCode.replaceAll("u", 4);

  dataStrings.sixthFloor.secretCode = secretCode;
};

classifySentence("Hola amigose");
console.log(dataStrings);
