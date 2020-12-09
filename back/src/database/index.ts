import mongoose from 'mongoose'

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Conectado ao banco de dados"))
.catch(err => console.log(`Erro ao conectar ao banco de dados ${err.message}`))