const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

//DB connect
mongoose.connect('mongodb+srv://pr2:ks2@clustor0.cslf6.mongodb.net/Clustor0?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("성공"))
.catch(err => console.log(err))

//화면에 문구 출력
app.get('/', (req, res) => res.send('hellow world!'))

//서버 연결
app.listen(port, () => console.log('dddddddddddddddd'))