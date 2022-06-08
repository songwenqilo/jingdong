const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/myshuju')
.then(()=>console.log('成功'))
.catch(err=>console.log('失败'))



// const categschema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:Boolean
//     },
//     img:{
//         type:String,
//         required:Boolean
//     }
// })
// module.exports=mongoose.model('categ',categschema)

// const categoryschema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true

//     },
//     img:{
//         type:String,
//         required:true
//     }
// })