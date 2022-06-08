const express=require('express')
const ejs=require('ejs')
const expressLayouts = require('express-ejs-layouts')
const fileUpload=require('express-fileupload')
//创建服务器
const app=express()
const port=process.env.PORT||3000
//app.use(express)

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(expressLayouts)
app.use(fileUpload({
    limits:{fileSize:50*1024*1024}
}))
app.set('layout','./layouts/main.ejs')
// app.use(fil)
const routes=require('./server/mtroutes.js')
app.use('/',routes)
app.listen(port,()=>{
    console.log('服务器'+port)
})