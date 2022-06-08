require('../db')
const Categ = require('../Categ')
//利用数据模型
const Restaurant =require('../Restaurant')
exports.homepage= async (req,res)=>{
    try{
        // 
        const categs = await Categ.find()
        const restaurant = await Restaurant.find().limit(5)
        const distance = await Restaurant.find({category:'火锅'}).sort({distance:1})
    res.render('index',{title:'xiaoming',categs,restaurant,distance})
    }catch(error){
        res.status(500).send(error.message)
    } 
}
exports.xiaoming= async (req,res)=>{
    res.render('addcom',{title:'添加餐馆'})
}
exports.xiaomingpost= async (req,res)=>{
    try{
        const newrestaurant=new Restaurant({
            name:req.body.name,
            category:req.body.category,
            desc:req.body.intro,
            averageCost:req.body.averageCost,
            promotion:req.body.promotion,
            featured:req.body.featured,
            address:req.body.address
            })
            await newrestaurant.save()
    }catch(error){
        res.json(error)
        res.redirect('/addcom')
    }
}
exports.xiaoshan= async (req,res)=>{
    try{
        // 
        const categs = await Categ.find()
        const restaurant = await Restaurant.find().limit(5)
        const distance = await Restaurant.find({category:'火锅'}).sort({distance:1})
    res.render('index',{title:'xiaoming',categs,restaurant,distance})
    }catch(error){
        res.status(500).send(error.message)
    } 
}
exports.hai= async (req,res)=>{
    try{
        // 
        const categsid = req.params.id
        const restaurant = await Restaurant.find()
    res.render('index',{title:'xiaoming',categsid})
    }catch(error){
        res.status(500).send(error.message)
    }   
}
exports.haic= async (req,res)=>{
    try{
        // 
        const categsid = req.params.id
        const restaurant = await Restaurant.find()
    res.render('index',{title:'xiaoming',categsid})
    }catch(error){
        res.status(500).send(error.message)
    }   
}
//exports.addre
// const categ=categ.find().limit(10)
// res.render('index',{title:'xiaoming',categ})