import express from 'express'
import indexRoutes from './routes/index.routes.js'
import privadasRoutes from './routes/privadas.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'

const app = express()
app.use(express.json())
app.use(indexRoutes)
app.use('/api', privadasRoutes)
app.use('/api', usuariosRoutes)

export default app;