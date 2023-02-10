const express = require("express");
const app = express();
const { infoCursos } = require("./cursos")

// Routing
app.get('/', (req, res) => {
    res.send("Mi primer servidor con Express. Cursos")
})

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos)
})

app.get('/api/cursos/programacion', (req, res) => {
    res.send(infoCursos.programacion)
})

app.get('/api/cursos/matematicas', (req, res) => {
    res.send(infoCursos.matematicas)
})

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0) {
        return res.send(`No se encontraron cursos de ${lenguaje}`)
    }
    res.status(404).end(JSON.stringify(resultados));
})

app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

   resultados.length === 0 ? res.send(`No se encontraron cursos de ${tema}`) :

    res.status(404).end(JSON.stringify(resultados));
})

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    resultados.length === 0 ? res.send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`) :
    
    res.status(404).end(JSON.stringify(resultados));
})

const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`);
});