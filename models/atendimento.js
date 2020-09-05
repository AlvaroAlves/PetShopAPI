const conexao = require('../infra/connection')

class Atendimento{
    adiciona(atendimento){
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimento, (err, results) => {
            if(err){
                console.log(err)
            }else{
                console.log(results)
            }
        })
    }
}

module.exports = new Atendimento