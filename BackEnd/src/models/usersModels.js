const conecction = require('./conecction')
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
 const query = 'INSERT INTO users (name,password,cpf,email) VALUES (?,?,?,?)';
 const [result] = await conecction.execute(query,[name,password,cepf,email])
 return {insertId : result.insertId};
}

const deleteUser =async(id)=>{
  const query = 'DELETE FROM users WHERE id =?';
  const [result] = await conecction.execute(query,[id])
  return result;
}

const updateUser =async(id,user)=>{
  const {name,password,cpf:cepf,email} = user
  const query = 'UPDATE users SET name =?,password =?,cpf =?,email =? WHERE id =?';
  const [result] = await conecction.execute(query,[name,password,cepf,email,id])
  return result;
}



module.exports={
getAllUser,
 getByIdUser,
 createUser,
 deleteUser,
 updateUser
}