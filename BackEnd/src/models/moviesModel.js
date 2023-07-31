const conecction = require('./conecction')

const getAll=async()=>{
  //essa function deve acessar o banco e retornar todos os filmes que esta la
  const [movies] = await conecction.execute('SELECT * FROM movies');
  //esse conchete em volta do movies quer dizer que a 1 postion do array que o banco retorna eu quero colocar nessa const isso chama destrutura array
  return movies;
}

const getById = async(id)=>{
  const query = 'SELECT * FROM movies WHERE id =?'
  const [movies] = await conecction.execute(query,[id])
  return movies;
}

const createMovie =async(movie)=>{
const {name,director,img} = movie;
const dataUtc = new Date(Date.now()).toUTCString()
//vai representa a data do dia de hoje 
const [criarMovies] = await conecction.execute('INSERT INTO movies(name,director,img,dataAno) VALUES(?, ?, ?, ?)',[name,director,img,dataUtc])
return {insertId : criarMovies.insertId};
}

const deleteMovie=async(id)=>{
const removedMovie = await conecction.execute('DELETE FROM movies WHERE id = ?',[id]);
return removedMovie;
}

const updateMovei =async(id,movie)=>{
const {name,director,img} = movie
const query = 'UPDATE movies SET name = ?, director = ?, img = ? WHERE id = ?';
const [updateMovei] = await conecction.execute(query,[name,director,img,id]);
return updateMovei;
}

module.exports = {
  getAll,
  createMovie,
  deleteMovie,
  updateMovei,
  getById
}