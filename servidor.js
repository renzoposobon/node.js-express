const http = require("http");

const servidor = http.createServer((req, res) => {
    console.log("Solicitud nueva");
    res.end("Hola mundoooo");
});

const PUERTO = 3000

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}`);
});