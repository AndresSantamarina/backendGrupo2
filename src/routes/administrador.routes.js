import { Router } from "express";
import { crearAdmin } from "../controllers/administrador.controllers.js";

const routerAdministrador = Router()

routerAdministrador.route('/admin/create').post(crearAdmin)

export default routerAdministrador