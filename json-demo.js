// const curso = require("./curso.json")

// console.log(curso.esPublico);

let inforCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 1472,
    "numLikes": 1036,
    "temas": [
      "Javascript",
      "Node.js"
    ],
    "esPublico": true
}

// Objeto -> Cadena de caracteres
// Cadena de caracter en formato JSON
let infoCursoJSON = JSON.stringify(inforCurso)

// console.log(infoCursoJSON);

// Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON)

console.log(infoCursoObjeto);