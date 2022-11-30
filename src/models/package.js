const mongoose = require("mongoose");
const { Schema } = mongoose;

// User register

const packageSchema = new Schema({

    date: { // fecha y hora
        type: Date, 
        required: true,
    },
    state:{ // estado
        type: String,
        required:true
    },
    width:{ // ancho
        type: Number,
        required:true
    },
    length:{ // largo
        type: Number,
        required:true
    },
    height:{ // altura
        type: Number,
        required:true
    },
    pAddress:{ // direccion de recogida 
        type: String,
        required:true
    },
    pCity:{ // ciudad de recogida
        type: String,
        required:true
    },
    sAddress:{ // direccion de envío
        type: String,
        required:true
    },
    sCity:{ // ciudad de envío
        type: String,
        required:true
    },
    namePerson:{ // Nombre del destinatario
        type: String,
        required:true
    },
    nit:{ // c.c o nit
        type: Number,
        required:true
    },
    // weightType:{ // tipo de peso
    //     type: String,
    //     required:true
    // },
    // weight:{ // peso del paquete
    //     type: Number,
    //     required:true
    // }
    // code:{ // code
    //     type: String,
    //     required: true
    // }

});

module.exports = mongoose.model("Package", packageSchema);