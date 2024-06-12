const express = require('express')
const mustacheExpress = require('mustache-express')
const dotenv = require('dotenv')
const virusTotalRoutes = require('./src/routes/virusTotalRoutes')
const postRoutes = require('./src/routes/postContentRoutes')
const usuarioRoutes = require('./src/routes/usuarioContentRoutes')
const { connectDB, sequelize } = require('./src/config/db')
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

const app = express()
const PORT = 8080;

let usuariologado = ""
let logado = false

connectDB()
sequelize.sync()

dotenv.config()

app.use('/static', express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/api/virustotal', virusTotalRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/usuarios', usuarioRoutes)

app.engine('html', mustacheExpress())
app.set('view engine', 'html')

app.set('views', __dirname + '/src/views')


app.listen(PORT, function () {
    console.log("app rodando na porta" + PORT)
})

app.get('/', function (req, res) {
    if (logado){
        res.render('index_logado.html',{usuariologado})
    }else{
        res.render('index.html')
    }
    
})

app.get('/sair', function (req, res) {
    logado = false
    usuariologado = ""
    res.redirect('/')
})


app.get('/login', function (req, res) {
    res.render('login.html')
})

app.get('/cadastrar-usuario', function (req, res) {
    res.render('cadastroUsuario.html')
})

app.get('/ferramentas', function (req, res) {
    res.render('ferramentas.html')
})

app.get('/verificacaourl', function (req, res) {
    res.render('verificacao-url.html')
})

app.get('/noticias', function (req, res) {
    res.render('noticias.html')
})

app.get('/createpost', function (req, res) {
    res.render('createPost.html')
})

app.get('/listposts', function (req, res) {
    res.render('listPosts.html')
})


app.post('/verificarLogin',function(req,res){
    nome = req.body.nome
    senha = req.body.senha

    let sql = `SELECT * FROM usuarios WHERE nome = ? and senha = ?`;

    db.get(sql, [nome,senha], (err, row) => {
        if (err) {
            res.redirect('/login')
            return console.error(err.message);
            
        }else{
            if (row){
                logado = true
                usuariologado = nome
                res.redirect('/')
            }else{
                res.redirect('/login')
            } 
        }
        
            
    });

    
})



