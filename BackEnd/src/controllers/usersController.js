const moviesModels = require("../models/usersModels");

const getAllUser = async (req, res) => {
  const user = await moviesModels.getAllUser();
  return res.status(200).json(user);
};

const getByIdUser = async (req, res) => {
  const { id } = req.params;
  const user = await moviesModels.getByIdUser(id);
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const user = await moviesModels.createUser(req.body);
  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  await moviesModels.updateUser(id, req.body);
  return res.status(200).json(req.body);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await moviesModels.deleteUser(id);
  return res.status(200).json();
};

const LoginUser = async(req, res) => {
  const {email,password} = req.body
   const userLogado = await moviesModels.UsurioLogado(email,password);
   return res.status(200).json(userLogado);
}

module.exports = {
  
  getAllUser,
  getByIdUser,
  createUser,
  updateUser,
  deleteUser,
  LoginUser,
};
