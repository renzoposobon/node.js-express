const { saludarMundo, saludar } = require("./saludos")

// console.log(saludar("Renzo"));
// console.log(saludarMundo());

// console.log("Hola mundo")
// console.warn("Ocurrió un error");
// console.error(new Error("¡Ocurrió un error!"));

// console.log(process.env);
// console.log(process.argv);

// for (let i = 2; i < process.argv.length; i++) {
//   console.log(process.argv[i]);
// }

// console.log(process.memoryUsage());

// const os = require("os")

// console.log(os.type());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());

////

// function mostrarTema(tema) {
//     console.log("Estoy aprendiendo", tema);
// }

// setTimeout(mostrarTema, 3000, "Node.js")

////

// function sumar(a, b) {
//     console.log(a + b);
// }

// setTimeout(sumar, 2000, 5, 6)

////

// console.log("Antes de setImmediate()");
// setImmediate(mostrarTema, "Node.js")
// console.log("Despues de setImmediate()");

////

// setInterval(mostrarTema, 2000, "Typescript")

////

const fs = require("fs")

// LEER
fs.readFile("indx.html", "utf-8", (err, contenido) => {
  if (err) {
    console.log(err.path);
    throw err;
  } 
  console.log(contenido);
})

// RENOMBRAR
fs.rename("index.html", "main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Nombre cambiado exitosamente");
});

// AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO
fs.appendFile("index.html", "<p>Holaaaa</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("Archivo actualizado");
})

// REEMPLAZAR TODO EL CONTENIDO DEL ARCHIVO
fs.writeFile("index.html", "Contenido Nuevo", (err) => {
    if (err) {
      throw err;
    }
    console.log("Contenido reemplazado");
  })

// ELIMINAR ARCHIVOS
fs.unlink("main.html", (err) => {
    if (err) {
      throw err;
    }
    console.log("Archivo eliminado");
  })

