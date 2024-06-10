const express = require('express')
const mustacheExpress = require('mustache-express')
const dotenv = require('dotenv')
const virusTotalRoutes = require('./src/routes/virusTotalRoutes')
const postRoutes = require('./src/routes/postContentRoutes')
const { connectDB, sequelize } = require('./src/config/db')

const app = express()
const PORT = 8080;

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

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')


app.listen(PORT, function () {
    console.log("app rodando na porta" + PORT)
})

app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/login', function (req, res) {
    res.render('login.html')
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