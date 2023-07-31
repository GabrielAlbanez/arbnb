
const { cpf } = require('cpf-cnpj-validator')
const emailValidator = require('email-validator')

const validateBody = (req,res,next)=>{
  const {name,email,password,cpf:cepf} = req.body
  const cleanCPF = cepf.replace(/[.-]/g, '');

  if(!name || !email || !password){
    return res.status(400).json({message:"Please provide all fields"})
  }
  
  
 

  if (cleanCPF.length !== 11) {
    return res.status(400).json({ message: "Invalid CPF length" });
  }

  // Realizar a validação usando o cpf-cnpj-validator
  if (!cpf.isValid(cleanCPF)) {
    return res.status(400).json({ message: "Invalid CPF" });
  }


  if(!emailValidator.validate(email)){
    return res.status(400).json({message:"Please provide a valid email"})
  }

  next();

  

  




}

module.exports={
validateBody
}