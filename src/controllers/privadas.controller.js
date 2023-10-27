import {pool} from '../db.js'

export const getPrivadas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT id, nombre, activo from privada WHERE activo = 1')
         res.json(result)
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los datos de la privada'
        })
    }    
}

export const setPrivada = async (req, res) => {
    try {
        const {nombre, activo} = req.body
        await pool.query('INSERT INTO privada(nombre,activo) VALUES(?, ?)', [nombre, activo])
        res.send({
            success : true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la privada'
        })
    }    
}

export const putPrivada = async (req, res) => {
    try {
        const {id, nombre, activo} = req.body
        await pool.query('UPDATE PRIVADA SET nombre =?, activo =? WHERE id = ?', [nombre, activo, id])
        res.send({
            success : true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar'
        })
    }    
}