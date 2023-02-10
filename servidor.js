const http = require("http");

const servidor = http.createServer((req, res) => {
    // SOLICITUD
    // console.log("===> req (solicitud)");
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // RESPUESTA
    // console.log("===> res (respuesta)");
    // console.log(res.statusCode);
    // res.statusCode = 404
    // console.log(res.statusCode);
    // res.setHeader('content-type', 'application/json');
    // console.log(res.getHeaders());
    res.end("Hola, mundo");
});

const PUERTO = 3000

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`);
});