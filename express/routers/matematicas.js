const express = require("express");

const {matematicas} = require('../datos/cursos').infoCursos

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) => {
    res.send(matematicas)
})

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso => curso.tema === tema);

  resultados.length === 0 ? res.send(`No se encontraron cursos de ${tema}`) :

  res.status(404).end(JSON.stringify(resultados));
})

module.exports = routerMatematicas