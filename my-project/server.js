
global.__base = __dirname + '/';

let express        = require('express');
let bodyParser     = require('body-parser');
let path = require('path');
let app  = express();
let port = Number(process.env.PORT || 3130);
// var cors = require('cors')
//
// app.use(cors());
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(express.static(path.join(__base, '/app/ngApp/dist')));

// require(path.join(__base, 'app/proxy'))(app, {});

app.get('/',function (req,res) {
  res.sendfile(__dirname + '/src/app/app.component.html');
})


app.use('/src/styles.css', function(req,res){
  res.sendfile(__dirname + '/src/styles.css');
});

app.get('/src/app/app.component.css', function(req,res){
  res.sendfile(__dirname + '/src/app/app.component.css');
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
