const validateBody=(request,response,next)=>{
  //função para validar os dadis que vao ser cadastrado
  const {body} = request

  if(body.name === undefined){
    return response.status(400).json({message: 'the fiedl name is required'});
  }
  if(body.name === ""){
   return response.status(400).json({message: 'name cannot be empty'});
  }
  next();
}
module.exports={
  validateBody
}