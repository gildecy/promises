
console.log('pedir urber')
const promesa = new Promise((resolve, reject) => {
    return resolve('pedido aceito')
    
})
console.log('aguardando')
promesa.then(result => console.log(result)).
catch(erro => console.log(erro))


