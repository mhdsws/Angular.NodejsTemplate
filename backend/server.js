var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
messages = [{text: "Some Text", owner: "Mohammad"}, {text: "Other Text", owner: "Sawas"}];
users = [{firstName:'a', email:'a', password:'a', id:0}];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*, content-type");
    next();
})

var api = express.Router();
var auth = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);
    res.json(result);
})
api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})
auth.post('/login', (req, res) => {
    var user = users.find(user => user.email == req.body.email);
    if(!user) sendAuthError(res);
    if(user.password == req.body.password)
        sendToken(user, res); 
    else 
        sendAuthError(res);
})
auth.post('/register', (req, res) => {
    var index = users.push(req.body) - 1;
    var user = users[index];
    user.id = index;
    sendToken(user, res);
})
function sendToken(user, res) {
    var token = jwt.sign(user.id, '123');
    res.json({firstName: user.firstName, token});
}
function sendAuthError(res) {
    return res.json({success: false, message: 'user or password incorrect'});
}
app.use('/api', api);
app.use('/auth', auth);

app.listen(56343);