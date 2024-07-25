import mongoose, { Schema } from "mongoose";

const profesorSchema = new Schema ({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const Profesor = mongoose.model('profesor', profesorSchema)

export default Profesor