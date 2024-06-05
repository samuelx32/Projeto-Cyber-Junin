const express = require('express')
const mustacheExpress = require('mustache-express')
const dotenv = require('dotenv')
const virusTotalRoutes = require('./src/routes/virusTotalRoutes')
const app = express()
const PORT = 8080;
dotenv.config()
app.use(express.urlencoded({
    extended: true
}))


app.listen(PORT, function(){
    console.log("app rodando na porta" + PORT)
})

app.use('/static', express.static(__dirname + '/public'));
app.use(express.json())

app.engine ('html',mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/views')

app.get('/',function(req,res){
    res.render('index.html')
})

app.use('/api/virustotal', virusTotalRoutes)

app.get('/contato',function(req,res){
    res.render('contato.html')
})