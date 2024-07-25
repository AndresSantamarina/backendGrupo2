import mongoose, { Schema } from "mongoose";

const calificacionSchema = new Schema({
    alumnoId: {
        type: Schema.Types.ObjectId,
        ref: 'alumno',
        required: true
    },
    examenId: {
        type: Schema.Types.ObjectId,
        ref: 'examen',
        required: true
    },
    materiaId: {
        type: Schema.Types.ObjectId,
        ref: 'materia',
        required: true
    },
    calificacion: {
        type: Number,
        required: true
    }
})

const Calificacion = mongoose.model('calificacion', calificacionSchema)

export default Calificacion