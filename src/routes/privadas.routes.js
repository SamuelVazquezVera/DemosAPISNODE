import { Router } from "express"
import {getPrivadas, setPrivada, putPrivada } from '../controllers/privadas.controller.js'

const router = Router()

router.get('/privadas', getPrivadas)
router.post('/privadas/crear', setPrivada)
router.post('/privadas/actualizar', putPrivada)
export default router