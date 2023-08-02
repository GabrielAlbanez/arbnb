// vai ser um pedaço do app que vai fazer a parte do retoamento 
const express = require('express')

const router = express.Router();
const userController = require('./controllers/usersController')
const homeController = require('./controllers/homeController')

//essa rota /movie vai pegar todos os filmes do banco de dados e guardar em um array
const userMiddleware = require('./middlewares/usersMiddleware')



//rotas users
router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getByIdUser);
router.post('/register', userMiddleware.validateBody,userController.createUser);
router.put('/user/:id', userMiddleware.validateBody,userController.updateUser);
router.delete('/user/:id',userController.deleteUser);
//rota para fazer login de usuarios
router.post('/login',userController.LoginUser)


//rotas para devolver as respostas das casas em json
router.get('/private', userMiddleware.verfiicarToken,userController.RouterPrivateAcess)

router.get('/home',homeController.getAllHomes);

module.exports = router;

