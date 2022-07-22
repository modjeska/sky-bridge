const express = require('express')
const session = require('express-session')
const path = require('path')
const routes = require('./controllers')
const helpers = require('./utils/helpers')
const sequelize = require('./config/bridge')
const exphbs = require('express-handlebars')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const app = express()
const PORT = process.env.PORT || 3001
const hbs = exphbs.create({ helpers })
const sess = {
  secret: 'nerd side secret',
  cookie: {
    maxAge: 3600,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sess))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Live server running at port ${PORT}.`))
})
  