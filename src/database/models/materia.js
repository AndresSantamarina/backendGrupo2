import mongoose, { Schema } from "mongoose";

const materiaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    profesorId: {
        type: Schema.Types.ObjectId, ref: 'profesor', required: true
    },
    horario:{
        type: String
    }
})

const Materia = mongoose.model('materia', materiaSchema)

export default Materia