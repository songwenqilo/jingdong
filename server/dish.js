const {default:mongoose}=require('mongoose')
const { boolean } = require('webidl-conversions')
const dishschema=new mongoose.Schema({
    name:{
        type:String,
        required:Boolean
    },
    desc:{
        type:String,
        required:Boolean
    },
    img:{
        type:String,
        required:Boolean
    },
    category:{
        type:Stying,
        catearr:[String],
        required:Boolean
    }  
})