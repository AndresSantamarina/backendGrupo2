import Administrador from "../database/models/administrador.js";

export const crearAdmin = async (req, res) => {
    try {
        const { password, email } = req.body;
        const administradorEmailSearch = await Administrador.findOne({ email });
        if (administradorEmailSearch) {
            return res.status(400).json({
                message: "Ya existe un admin con ese email",
            });
        }

        const newAdministrador = new Administrador(req.body);
        const savedAdministrador = await newAdministrador.save();

        res.status(201).json({
            administrador: savedAdministrador,
            mensaje: "Administrador creado",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensage: "Hubo un error al procesar la solicitud",
            error: error.message,
        });
    }
};
