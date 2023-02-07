// const promesaCumplida = false

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         promesaCumplida ? resolve("Promesa Cumplida!!") : reject("Promesa rechazada 😪")
//     }, 3000);
// })
// .then((valor) => {
//     console.log(valor);
// })
// .catch((err) => {
//     console.log(err);
// })

// const statusPedido = () => {
//     const status = Math.random() < 0.8;
//     return status
// }

// // for (let i = 0; i < 10; i++) {
// //     console.log(statusPedido());
// // }


// const miPedidoDePizza = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (statusPedido) {
//             resolve("¡Pedido exitoso! Su pizza está en camino")
//         } else {
//             reject("Ocurrió un error. Por favor intente nuevamente")
//         }
//     }, 3000);
// })
// .then((valor) => {
//     console.log(valor);
// })
// .catch((err) => {
//     console.log(err);
// })

function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de freeCodeCamp.`);
        setTimeout(() => {
            if (producto === "taza") {
                resolve("Ordenando una taza.")
            } else {
                reject("Este producto no está disponible.")
            }
        }, 2000)
    })
}

function procesarPedido (respuesta) {
    return new Promise(resolve => {
        console.log("Procesando respuesta...");
        console.log(`La respuesta fue: "${respuesta}".`);
        setTimeout(() => {
            resolve("Gracias por tu compra.")
        }, 4000)
    })
}

// ordenarProducto("taza")
//     .then(respuesta => {
//         console.log("Respuesta recibida.");
//         console.log(respuesta);
//         return procesarPedido(respuesta)
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const realizarPedido = async ( producto ) => {
    try {
        const respuesta = await ordenarProducto(producto)
        console.log("Respuesta recibida.");
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta)
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido("taza")
