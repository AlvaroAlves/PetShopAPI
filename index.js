const customExpress = require("./config/customExpress")
const conexao = require('./infra/connection')

conexao.connect( err => {
    if(err){
        console.log(err)
    }else{
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})