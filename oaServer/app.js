let express = require('express'),
    createError = require('http-errors'),
    cors = require('cors'),
    path = require('path'),
    mongoose = require('mongoose'),
    dbConfig = require('./conf/database'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

//  Routers
const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),
    bearRouter = require('./routes/bearRouter'),
    dogRouter = require('./routes/dogRouter'),
    foxRouter = require('./routes/foxRouter'),
    otterRouter = require('./routes/otterRouter'),
    animalRouter = require('./routes/animalRouter');

// Models
//const Bears = require('./models/bears'),
    //Dogs = require('./models/dogs'),
    //Foxes = require('./models/foxes'),
    //Otters = require('./models/otters'),
    //Animals = require('./models/animals');


// Connect MongoDB Server
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
        console.success('INFO Success! Database connected')
    },
    error => {
        console.log('Fatal Database could not be connected : ' + err)
    }
)



// Express setup
const app = express();
app.use(cors());


// view engine setup - Jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Index Route
app.use('/', indexRouter);

// Endpoint Routes
app.use('/users', usersRouter);
app.use('/bears', bearRouter);
app.use('/dogs', dogRouter);
app.use('/foxes', foxRouter);
app.use('/otters', otterRouter);
app.use('/animals', animalRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Static build location
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
