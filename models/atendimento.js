const conexao = require('../infra/connection')
const moment = require('moment')

class Atendimento{
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const dataIsValid = moment(data).isSameOrAfter(dataCriacao)
        const clientIsValid = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome : 'data',
                valido : dataIsValid, 
                mensagem : 'O campo data deve ser maior ou igual que a data atual'
            },
            {
                nome : 'cliente',
                valido : clientIsValid,
                mensagem : 'Cliente deve ter pelo menos 5 caracteres'
            }
        ]

        const errors = validacoes.filter(campo => !campo.valido)
        const haveErrors = errors.length

        if(haveErrors){
            res.status(400).json(errors)
        }else{
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (err, results) => {
                if(err){
                    res.status(400).json(err)
                }else{
                    res.status(201).json(results)
                }
            })
        } 
    }
}

module.exports = new Atendimento