const { cpf } = require("cpf-cnpj-validator");
const emailValidator = require("email-validator");
const conecction = require("../models/conecction");
const jwt = require('jsonwebtoken');

const validateBody = async (req, res, next) => {
  const { name, email, password, cpf: cepf } = req.body;
  const cleanCPF = cepf.replace(/[.-]/g, "");

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  if (cleanCPF.length !== 11) {
    return res.status(400).json({ message: "Invalid CPF length" });
  }

  // Realizar a validação usando o cpf-cnpj-validator
  if (!cpf.isValid(cleanCPF)) {
    return res.status(400).json({ message: "Invalid CPF" });
  }

  if (!emailValidator.validate(email)) {
    return res.status(400).json({ message: "Please provide a valid email" });
  }

  // Verificar se o e-mail já está cadastrado no banco de dados
  const query = 'SELECT email FROM users WHERE email = ?';
  const [result] = await conecction.execute(query, [email]);
  console.log(result)

  if (result.length > 0) {
    return res.status(400).json({ message: "Email already registered" });
  }
  else{
    next()
  }



 
};


const verfiicarToken = (req,res,next)=>{
 
  const { name, email, password, cpf: cepf } = req.body;

  const token = req.headers['authorization']
  console.log(token)
  
  if(!token){
    return res.status(401).json({message: 'Token não fornecido'})
  }
  jwt.verify(email, "8903" , (err,decode) =>{
    if(err){
      return res.status(401).json({message: 'Token inválido'})
    }
    req.email = decode.email
    next()
  })

}




module.exports = {
  validateBody,
  verfiicarToken
};
