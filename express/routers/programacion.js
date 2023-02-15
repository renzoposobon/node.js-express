const express = require("express");

const {programacion} = require("../datos/cursos").infoCursos

const routerProgramacion = express.Router();

// Middleware => procesar el cuerpo de la solicitud en json
routerProgramacion.use(express.json())

routerProgramacion.get('/', (req, res) => {
    res.json(programacion)
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
      return res.status(404).json(`No se encontraron cursos de ${lenguaje}`)
  }

  if (req.query.ordenar === 'vistas') {
    res.json(resultados.sort((a, b) => a.vistas - b.vistas))
  } else {
    res.json(resultados)
  }
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
  // resultados.length === 0 ? res.json(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`) :
  // Respuesta vacía
  resultados.length === 0 ? res.status(404).end() :
  
  res.status(404).end(JSON.stringify(resultados));
})

// Agregar
routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.json(programacion);
})

// Editar o actualizar
routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.json(programacion);
});

// Actualizar parcial el objeto, una propiedad
routerProgramacion.patch('/:id', (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada);
  } else {
    res.status(404);
  }
  res.json(programacion)
});

// Eliminar
routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >= 0) {
    programacion.splice(indice, 1);
  }
  res.json(programacion)
})

module.exports = routerProgramacion