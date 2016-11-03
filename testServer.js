const expressMonocle = require('./');
const cookieParser = require('cookie-parser');

const app = expressMonocle();

app.use(cookieParser());

app.get('/',
  function (req, res, next) {
    req.id = `cheng`;
    res.cookie = { foo: 'bar' };
    next();
  },
  function secondFunc(req, res, next) {
    req.id = `travis`;
    next();
  },
  (req, res, next) => {
    res.foo = 'bar';
    req.id = `pat`;
    req.testing = { foo: 'bar' };
    next();
  },
  (req, res, next) => {
    req.id = `sahil`;
    next();
  },
  (req, res, next) => {
    req.id = `travis`;
    res.end();
  }
);

app.get('/login',
  // function secondFunc(req, res, next) {
  //   req.id = `cheng`;
  //   next();
  // },
  // (req, res, next) => {
  //   req.id = `travis`;
  //   next();
  // },
  (req, res, next) => {
    // req.id = `travis`;
    res.end();
  }
);

app.post('/login', (req, res, next) => {
  req.id = 'post';
  res.json({ foo: 'bar' });
});


app.listen(3000, () => {
  console.log('http://localhost:3000');
});
