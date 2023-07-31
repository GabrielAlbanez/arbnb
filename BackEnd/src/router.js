// vai ser um pedaço do app que vai fazer a parte do retoamento 
const express = require('express')

const router = express.Router();
const userController = require('./controllers/usersController')
const movieController = require('./controllers/movieController')
const homeController = require('./controllers/homeController')

//essa rota /movie vai pegar todos os filmes do banco de dados e guardar em um array
const movieMiddleware = require('./middlewares/movieMiddlewares')
const userMiddleware = require('./middlewares/usersMiddleware')


//rotas movies
router.get('/movie',movieController.getAll);
router.get('/movie/:id',movieController.getById);
router.post('/movie',movieMiddleware.validateBody, movieController.createMovie);
router.delete('/movie/:id', movieController.removedMovie);
router.put('/movie/:id',movieMiddleware.validateBody,movieController.UpdateMovie)

//rotas users
router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getByIdUser);
router.post('/user', userMiddleware.validateBody,userController.createUser);
router.put('/user/:id', userMiddleware.validateBody,userController.updateUser);
router.delete('/user/:id',userController.deleteUser);


//rotas para devolver as respostas das casas em json
router.get('/home',homeController.getAllHomes);

module.exports = router;
