const path = require('path');
const routes = require('./controllers/');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// Set app to run using express on a given port (for production) or 3001 for testing
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  // Connect the server to Sequelize
  app.use(session(sess));
  
  const helpers = require('./utils/helpers');
  
  // Use our helper functions for handlebars
  const hbs = exphbs.create({ helpers });
  
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(require('./controllers/'));
  
  // Start the server with force set to false -- meaning the database will not be empty on server start
  // Or true -- meaning the database will be fresh on server start
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });