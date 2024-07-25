import mongoose, { Schema } from "mongoose";

const administradorSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password:{
        type: String,
        required: true
    }
})

const Administrador = mongoose.model('administrador', administradorSchema)

export default Administrador