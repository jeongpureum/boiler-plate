const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {User} = require('./models/User');
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

//DB connect
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("mongodb connected"))
.catch(err => console.log(err))

//화면에 문구 출력
app.get('/', (req, res) => res.send('react'));

app.post('/register', (req, res) => {
    //회원가입 할 때 필요한 정보들을 client에서 가져오면 db에 넣어주는 역할
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            success: true
        })
    });

})

//서버 연결
app.listen(port, () => console.log('5000 server connected'));