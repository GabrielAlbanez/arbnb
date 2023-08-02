const { cpf } = require("cpf-cnpj-validator");
const emailValidator = require("email-validator");
const conecction = require("../models/conecction");
const jwt = require("jsonwebtoken");
const util = require("util");

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
  const query = "SELECT email FROM users WHERE email = ?";
  const [result] = await conecction.execute(query, [email]);
  console.log(result);

  if (result.length > 0) {
    return res.status(400).json({ message: "Email already registered" });
  } else {
    next();
  }
};

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if (!token) {
    return res.status(401).json({ error: "vc precisa estar logado para acessar essa pagina" });
  }

  const [tokenRecebido] = token.split(' ');

  if (!tokenRecebido) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  try {
    const decode = jwt.verify(tokenRecebido, "8903");
    req.userEmail = decode.email;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

module.exports = {
  validateBody,
  verificarToken,
};
