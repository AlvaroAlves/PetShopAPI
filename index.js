const customExpress = require("./config/customExpress")
const conexao = require('./infra/connection')
const Tabelas = require('./infra/tables')

conexao.connect( err => {
    if(err){
        console.log(err)
    }else{
        const app = customExpress()

        Tabelas.init(conexao)

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})