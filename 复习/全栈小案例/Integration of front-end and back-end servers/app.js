const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/admin')
.then(() => console.log('数据库连接成功'))
.catch(err => console.log(err))

const userSchema = new mongoose.Schema({
    name: String,
    password:String,
    studentStatus:String,
    personalSignature:String,
})
const User = mongoose.model('User', userSchema,'suibian')

const app = express()  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post('/save', (req, res) => {
    const { name,password,studentStatus,personalSignature } = req.body

    const newUser = new User({ name,password,studentStatus,personalSignature })

    newUser.save()
    .then(() => console.log('数据保存成功'))
    .catch(err => res.status(500).send(err))
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('服务器开始监听');
})
