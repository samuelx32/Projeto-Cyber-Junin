const express = require('express')
const mustacheExpress = require('mustache-express')
const dotenv = require('dotenv')
const virusTotalRoutes = require('./src/routes/virusTotalRoutes')

dotenv.config()

const app = express()
const PORT = 8080;

app.engine ('html',mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/views')

app.use(express.json())

app.get('/',function(req,res){
    res.render('index.html')
})

app.get('/contato',function(req,res){
    res.render('contato.html')
})

app.use('/api/virustotal', virusTotalRoutes)

// Iniciar o servidor
app.listen(PORT, function() {
    console.log("app rodando na porta " + PORT);
});