const conexao = require('../infra/connection')
const moment = require('moment')

class Atendimento{
    adiciona(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (err, results) => {
            if(err){
                console.log(err)
            }else{
                console.log(results)
            }
        })
    }
}

module.exports = new Atendimento