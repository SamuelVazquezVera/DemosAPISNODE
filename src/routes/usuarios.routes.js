import { Router } from "express"
import {getUsuario, setUsuario, putUsuario } from '../controllers/usuarios.controller.js'

const router = Router()

router.post('/usuarios/obtenerUsuario', getUsuario)
router.post('/usuarios/crear', setUsuario)
router.post('/usuarios/actualizar', putUsuario)

export default router