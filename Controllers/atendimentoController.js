const Atendimento = require('../models/atendimento')
const atendimento = require('../models/atendimento')

module.exports = app => {
    
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req,res) => {
        //transform id from string to int
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res)=>{
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req,res)=>{
        //transform id from string to int
        const id = parseInt(req.params.id)
        const valores = req.body

        atendimento.altera(id, valores, res)
    })
}