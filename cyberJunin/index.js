// Configs
const express = require('express')
const mustacheExpress = require('mustache-express')
const dotenv = require('dotenv')
const { connectDB, sequelize } = require('./src/config/db')
const sqlite3 = require('sqlite3').verbose();

// Instancias Personalizadas
const virusTotalRoutes = require('./src/routes/virusTotalRoutes')
const postRoutes = require('./src/routes/postContentRoutes')
const usuarioRoutes = require('./src/routes/usuarioContentRoutes')
const EducationalContent = require('./src/routes/EducationalContentRoutes')
const cyberAttackRoutes = require('./src/routes/CyberAttackRoutes')
const senhaRoutes = require('./src/routes/senhaRoutes') 

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
app.use('/api/cyberattacks', cyberAttackRoutes)
app.use('/api/educational-contents', EducationalContent)
app.use('/api/senha', senhaRoutes)
app.engine('html', mustacheExpress())
app.set('view engine', 'html')

app.set('views', __dirname + '/src/views')


app.listen(PORT, function () {
    console.log("app rodando na porta" + PORT)
})

app.get('/', function (req, res) {
    if (logado) {
        res.render('index_logado.html', { usuariologado })
    } else {
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

app.get('/verificacaourl', function (req, res) {
    res.render('verificacao-url.html')
})
app.get('/verificacaoarquivos', function (req, res) {
    res.render('verificacao-arquivos.html')
})

app.get('/verificasenha', function (req, res) {
    res.render('verificasenha.html')
})


app.post('/verificarLogin', function (req, res) {
    nome = req.body.nome
    senha = req.body.senha

    let sql = `SELECT * FROM usuarios WHERE nome = ? and senha = ?`;

    db.get(sql, [nome, senha], (err, row) => {
        if (err) {
            res.redirect('/login')
            return console.error(err.message);

        } else {
            if (row) {
                logado = true
                usuariologado = nome
                res.redirect('/')
            } else {
                res.redirect('/login')
            }
        }


    });


})

//cruds

app.get('/listposts', function (req, res) {
    res.render('listPosts.html')
})

app.get('/listestudos', function (req, res) {
    res.render('listEstudos.html')
})

app.get('/listferramentas', function (req, res) {
    res.render('listFerramentas.html')
})

app.get('/cadastrar-usuario', function (req, res) {
    res.render('cadastroUsuario.html')
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

app.get('/createcyberattack', function (req, res) {
    res.render('createCyberAttack.html')
})

app.get('/listcyberattacks', function (req, res) {
    res.render('listCyberAttacks.html')
})

app.get('/educational-contents', function (req, res) {
    res.render('educationalContent.html')
})