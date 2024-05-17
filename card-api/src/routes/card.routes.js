const {Router} = require('express')
const controller = require('../controllers/cardController')
const middleware = require('../middlewares/card.middleware')
const route = Router()

route.post('/card',controller.postCard)
// route.get('/card', controller.getcards)
// route.get('/card/:id',middleware.validateSerieById, controller.getSerieById)
// route.delete('/card/:id',middleware.validateSerieById,controller.deleteSerieById)
// route.put('/card/:id',middleware.validateSerieById,controller.updateSerieById)


module.exports = route