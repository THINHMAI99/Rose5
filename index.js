const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const accountRoutes = require('./routes/account-routes');
const userRoutes = require('./routes/user-routes');
const orchidRoutes = require('./routes/orchid-routes');
const feedRoutes = require('./routes/feed-routes');
const slideRoutes = require('./routes/slide-routes');
const aiRoutes = require('./routes/ai-routes');

const app = express();
app.use(function(req, res, next) {
    if (req.headers['content-type'] === 'application/json;') {
      req.headers['content-type'] = 'application/json';
    }
    next();
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', accountRoutes.routes);
app.use('/api', userRoutes.routes);
app.use('/api', orchidRoutes.routes);
app.use('/api', feedRoutes.routes);
app.use('/api', slideRoutes.routes);
app.use('/api', aiRoutes.routes);

app.listen(config.port, ()=> console.log('App is listening on url http://localhost:' + config.port));

