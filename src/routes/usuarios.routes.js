import { Router } from "express"
import {getUsuario, setUsuario, putUsuario, putUsuarioPass } from '../controllers/usuarios.controller.js'

const router = Router()

router.post('/usuarios/obtenerUsuario', getUsuario)
router.post('/usuarios/crear', setUsuario)
router.post('/usuarios/actualizar', putUsuario)
router.post('/usuarios/actualizarCP', putUsuarioPass)

export default router