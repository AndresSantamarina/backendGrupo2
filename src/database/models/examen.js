import mongoose, { Schema } from "mongoose";

const examenSchema = new Schema({
    materiaId: {
        type: Schema.Types.ObjectId,
        ref: 'materia',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    alumnosInscriptos: [{
        type: Schema.Types.ObjectId, 
        ref: 'alumno'
    }],
    descripcion: {
        type: String
    },
    horario:{
        type: String
    }
})

const Examen = mongoose.model('examen', examenSchema)

export default Examen