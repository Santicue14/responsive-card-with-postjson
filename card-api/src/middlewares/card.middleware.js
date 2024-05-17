const card = require('../../data/data.json')


// const validateSerieById = (req,res,next) => {
//     const id = req.params.id
//     const idx = card.findIndex(s=> s.id == id)
//     if(idx < 0){
//         res.status(404).json({mensaje: `El id ${id} no fue encontrado :(`})
//     }
//     next()
// }

// module.exports = {validateSerieById}