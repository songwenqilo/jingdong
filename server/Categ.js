const mongoose=require('mongoose')
const categoryschema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    img:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Catege',categoryschema)