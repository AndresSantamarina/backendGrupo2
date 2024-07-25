import { Router } from "express";
import { crearProfesor, editarProfesor, eliminarProfesor, listarProfesores, obtenerProfesor, profesorSignIn } from "../controllers/profesor.controllers.js";


const routerProfesor = Router()

routerProfesor.route('/profesores/create').post(crearProfesor)
routerProfesor.route('/profesores').get(listarProfesores)
routerProfesor.route('/profesores/:id').get(obtenerProfesor).put(editarProfesor).delete(eliminarProfesor)
routerProfesor.route('/profesores/signin').post(profesorSignIn)

export default routerProfesor