import mongoose, { Schema } from "mongoose";

const alumnoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    anio:{
        type: String,
        required: true
    }
})

const Alumno = mongoose.model('alumno', alumnoSchema)

export default Alumno