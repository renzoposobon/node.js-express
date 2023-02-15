const express = require("express");

const {programacion} = require("../datos/cursos").infoCursos

const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) => {
    res.send(programacion)
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
  }

  if (req.query.ordenar === 'vistas') {
    res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)))
  } else {
    res.send(JSON.stringify(resultados))
  }
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
  resultados.length === 0 ? res.send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`) :
  
  res.status(404).end(JSON.stringify(resultados));
})

module.exports = routerProgramacion