const expressMonocle = require('./');

const app = expressMonocle();

app.get('/',
  function firstFunc(req, res, next) {
    // res.cookie('secret', (Math.floor(Math.random() * 99)));
    req.id = `cheng`;
    // console.log('first middleware');
    next();
  },
  (req, res, next) => {
    // res.cookie('secret', (Math.floor(Math.random() * 99)));
    req.id = `travis`;
    // console.log('second middleware');
    next();
  },
  (req, res, next) => {
    // res.cookie('secret', (Math.floor(Math.random() * 99)));
    req.id = `pat`;
    req.testing = 'testing object';
    // console.log('third middleware');
    next();
  },
  (req, res, next) => {
    // res.cookie('secret', (Math.floor(Math.random() * 99)));
    req.id = `sahil`;
    // console.log('fourth middleware');
    next();
  },
  (req, res, next) => {
    // console.log('Cookies: ', req.cookies);
    // console.log(req.id);
    req.id = `travis`;
    // console.log('final middleware');
    // console.log(req.id);
    res.end();
  }
);

app.get('/login',
  function firstFunc(req, res, next) {
    req.id = `cheng`;
    // console.log('first middleware');
    next();
  },
  (req, res, next) => {
    req.id = `travis`;
    // console.log('second middleware');
    next();
  },
  (req, res, next) => {
    req.id = `pat`;
    req.testing = 'testing object';
    // console.log('third middleware');
    next();
  },
  (req, res, next) => {
    req.id = `sahil`;
    // console.log('fourth middleware');
    next();
  },
  (req, res, next) => {
    // console.log(req.id);
    req.id = `travis`;
    // console.log('final middleware');
    // console.log(req.id);
    res.end();
  }
);


app.listen(3000, () => {
  console.log('http://localhost:3000');
});
