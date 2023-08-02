const importJson = require('../Json/dataHome.json')

const getAllHomes=(req,res)=>{

const Homes  = importJson
res.status(200).send(Homes)

}

const homeById =(req,res)=>{

    const id = parseInt(req.params.id)

    const casaEncontrada = importJson.casas.find((casa)=> casa.id === id)

    if(casaEncontrada){
        res.status(200).send(casaEncontrada)

    } else{
        res.status(401).send({message : "casa não encontrada"})
    }


}





module.exports = {
    getAllHomes,
    homeById
}