const express = require('express');
const router = express.Router();
const pruebaCtrl= require('../controllers/prueba.controller')

router.get('/', pruebaCtrl.obtener)
router.post('/',pruebaCtrl.create)
router.put('/',pruebaCtrl.actualizar)
router.delete('/',pruebaCtrl.eliminar)
module.exports=router