const conecction = require('./conecction')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//function que vai ter conexao direta com o banco
const { cpf } = require('cpf-cnpj-validator')
const getAllUser=async()=>{
  const query = `SELECT * FROM users`
  const [result] = await conecction.execute(query)
  return result;
}

const getByIdUser=async(id)=>{
  const query = 'SELECT * FROM users WHERE id = ?';
  const [result] = await conecction.execute(query,[id])
  return result;
}

const createUser =async(user)=>{
 const {name,password,cpf:cepf,email} = user
 const passwordHash = await bcrypt.hash(password,10);
 const query = 'INSERT INTO users (name,password,cpf,email) VALUES (?,?,?,?)';
 const [result] = await conecction.execute(query,[name,passwordHash,cepf,email])
 return {insertId : result.insertId};
}

const deleteUser =async(id)=>{
  const query = 'DELETE FROM users WHERE id =?';
  const [result] = await conecction.execute(query,[id])
  return result;
}

const updateUser =async(id,user)=>{
  const {name,password,cpf:cepf,email} = user
  const passwordHash = await bcrypt.hash(password,10);
  const query = 'UPDATE users SET name =?,password =?,cpf =?,email =? WHERE id =?';
  const [result] = await conecction.execute(query,[name,passwordHash,cepf,email,id])
  return result;
}

const UsurioLogado = async(email,password)=>{
  const query = 'SELECT * FROM users WHERE email = ?';
    const [result] = await conecction.execute(query,[email])
    if(result.length > 0){
      //se tiver dados dentro de resul
      const user = result[0] // esse user retonarna o email do usuario e a senha
      const passwordMatch = await bcrypt.compare(password,user.password)
      if(passwordMatch){
        const token = jwt.sign({ email }, "8903", { expiresIn: '1h' });
        return ("Login realizado com sucesso" + token)
      } else{
        return ("incorrect password")
      }
    } else{
      return ("incorrect E-mail")
    }
    return null

}

module.exports={
getAllUser,
 getByIdUser,
 createUser,
 deleteUser,
 updateUser,
 UsurioLogado
}