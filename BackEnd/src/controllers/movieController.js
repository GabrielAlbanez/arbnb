//camada de controler vai salvar as funções que vão ser passadas dentro dos router
const moviesModels = require('../models/moviesModel')
const getAll = async(req,res)=>{
  const movies = await moviesModels.getAll();
 return res.status(200).json(movies)
}
const getById=async(req,res)=>{
const {id} = req.params
const getMoviesId  = await moviesModels.getById(id);
 return res.status(200).json(getMoviesId)
}

const createMovie=async(req,res)=>{
  const movie = await moviesModels.createMovie(req.body);
return res.status(201).json(movie)
}

const removedMovie=async(req,res)=>{
  const {id} = req.params;
  console.log(id);
  await moviesModels.deleteMovie(id);
  return res.status(204).json()
}

const UpdateMovie=async(req, res) =>{
  const {id} = req.params;
  await moviesModels.updateMovei(id, req.body);
  return res.status(204).json()
}

module.exports={
  getAll,
  createMovie,
  removedMovie,
  UpdateMovie,
  getById
}