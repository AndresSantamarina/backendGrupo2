import Profesor from "../database/models/profesor.js";

export const crearProfesor = async (req, res) => {
    try {
        const { password, email } = req.body;
        const profesorEmailSearch = await Profesor.findOne({ email });
        if (profesorEmailSearch) {
            return res.status(400).json({
                message: "Ya existe un profesor con ese email",
            });
        }

        const newProfesor = new Profesor(req.body);
        const savedProfesor = await newProfesor.save();

        res.status(201).json({
            profesor: savedProfesor,
            mensaje: "Profesor creado",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensage: "Hubo un error al procesar la solicitud",
            error: error.message,
        });
    }
};

export const listarProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.find();
        res.status(200).json(profesores);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            mensaje: "No se pudo obtener la lista de profesores.",
        });
    }
};

export const obtenerProfesor = async (req, res) => {
    try {
        const profesorBuscado = await Profesor.findById(req.params.id);
        res.status(200).json(profesorBuscado);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            mensaje: "No se encontró el profesor buscado.",
        });
    }
};

export const editarProfesor = async (req, res) => {
    try {
        const buscarProfesor = await Profesor.findById(req.params.id)
        if (!buscarProfesor) {
            return res.status(404).json({
                mensaje: "No se pudo editar el profesor, el id es incorrecto"
            })
        }
        const profesor = await Profesor.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: "El profesor fue modificado exitosamente", profesor: profesor
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrió un error al intentar editar el profesor"
        })
    }
}

export const eliminarProfesor = async (req, res) => {
    try {
        const buscarProfesor = await Profesor.findById(req.params.id)
        if (!buscarProfesor) {
            return res.status(404).json({
                mensaje: "No se pudo eliminar al profesor, el id es incorrecto"
            })
        }
        await Profesor.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "El profesor fue eliminado correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrió un error al intentar eliminar el profesor"
        })
    }
}

export const profesorSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        //verificar si el email ya esta guardado
        const profesorBuscado = await Profesor.findOne({ email });
        if (!profesorBuscado) {
            //si no existe un usuario con el mail
            return res
                .status(400)
                .json({ mensaje: "Email o password incorrecto - email" });
        }
        const passwordValido = usuarioBuscado.password

        if (!passwordValido) {
            return res
                .status(400)
                .json({ mensaje: "Email o password incorrecto - password" });
        }
        //generar el token
        res.status(200).json({
            message: "El usuario existe",
            email: profesorBuscado.email,
            nombre: profesorBuscado.nombre,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Ocurrio un error durante el login",
        });
    }
};