const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const empleado = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    apellido: {
        type: String,
        trim: true
    },
    salario: {
        type: String,
        trim: true
    },
    
});

module.exports  = mongoose.model('empleado', empleado);