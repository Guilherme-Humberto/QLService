import { server } from './index'

server.listen()
.then(() => console.log("Servidor conectado"))
.catch(err => console.log(`Erro ao conectar servidor ${err.message}`))