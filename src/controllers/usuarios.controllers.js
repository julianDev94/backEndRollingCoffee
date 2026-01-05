import Usuario from "../database/model/usuario";


export const crearUsuario = async (req, res) =>{
    try {
        const usuarioCreado = new Usuario(req.body);
        await usuarioCreado.save();
        res.status(201).json({mensaje: "El usuario fue creado con exito"});
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'No se puede procesar la solicitud, por favor intentelo de nuevo mas tarde'})
    }
}