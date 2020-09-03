module.exports = app => {
    
    app.get('/atendimentos', (req, res) => {
        res.send('Página de atendimentos')
    })

    app.post('/atendimentos', (req, res)=>{
        res.send('pagina de atendimentos POST')
    })
}