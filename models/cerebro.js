var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    flavor: {
        type: String,
        minlength: [3, "El sabor es muy corto: min 3 caracteres"],
        maxlength: [20, "El sabor es muy largo: max 20 caracteres"]
    },
    description: {
        type: String,
        minlength: [6, "La descripcion es muy corta: min 6 caracteres"],
        maxlength: [40, "La descripcion es muy larga: max 40 caracteres"]
    },
    iq: {
        type: Number,
        required: true,
        min: [1, 'El iq no puede ser 0']
    },
    picture: {
        type: String,
        required: true
    }
})

var Cerebro = mongoose.model("Cerebro", modelSchema)
module.exports = Cerebro;