const expressMonocle = require('./');
// const cookieParser = require('cookie-parser');

const app = expressMonocle();

app.use(cookieParser());

app.get('/',
  function firstFunc(req, res, next) {
    console.log(`This is the base route`);
    // res.cookie(`secret`, (Math.floor(Math.random() * 99)));
    // console.log(req.cookies);
    req.id = `cheng`;
    next();
  },
  (req, res, next) => {
    req.id = `travis`;
    next();
  },
  (req, res, next) => {
    req.id = `pat`;
    req.testing = 'testing object';
    next();
  },
  (req, res, next) => {
    res.cookie('secret', (Math.floor(Math.random() * 99)));
    req.id = `sahil`;
    next();
  },
  (req, res, next) => {
    req.name = `travis`;
    res.end();
  }
);

app.get('/login',
  function firstFunc(req, res, next) {
    console.log(`This is the login route`);
    req.id = `cheng`;
    next();
  },
  (req, res, next) => {
    req.id = `pat`;
    req.testing = 'testing object';
    next();
  },
  (req, res, next) => {
    req.id = `travis`;
    res.end();
  }
);


app.listen(3000, () => {
  console.log('http://localhost:3000');
});
