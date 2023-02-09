const http = require('http')
const cursos = require('./cursos')

const servidor = http.createServer((req, res) => {
  const { method } = req;
  switch(method) {
    case 'GET':
      return manejarSolicitudGet(req, res);
    case 'POST':
      return manejarSolicitudPost(req, res)
    default:
      res.statusCode = 501
      res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
      break;
  }
});

const manejarSolicitudGet = (req, res) => {
  let path = req.url;

  if (path === '/') {
    res.writeHead(200, {'Content-Type':'application/json'});
    return res.end("<h1>Bienvendos a mi primer servidor y API creados con Node.js</h1>")
  } else if (path === '/cursos') {
    return res.end(JSON.stringify(cursos.infoCursos))
  } else if (path === '/cursos/programacion') {
    return res.end(JSON.stringify(cursos.infoCursos.programacion))
  } else {
    res.statusCode = 404
    return res.end("<p>Algo fallo</p>")
  }
}

const manejarSolicitudPost = (req, res) => {
  let path = req.url;
  if (path === "/cursos/programacion") {
    let cuerpo = ''
    req.on('data', contenido => {
      cuerpo += contenido.toString()
    })
    req.on('end', () => {
      console.log(cuerpo);
      // Transforma de string a object
      cuerpo = JSON.parse(cuerpo)
      console.log(cuerpo.titulo);
      res.end("el servidor recibio una solicitud POST para /cursos/programacion")
    })
    // return res.end("el servidor recibio una solicitud POST para /cursos/programacion")
  }
}


const PUERTO = 3000

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en http://localhost:${PUERTO}...`);
})