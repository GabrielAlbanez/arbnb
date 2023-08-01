const importJson = require('../Json/dataHome.json')

const getAllHomes=(req,res)=>{

const Homes  = importJson
res.status(200).send(Homes)

}





module.exports = {
    getAllHomes
}