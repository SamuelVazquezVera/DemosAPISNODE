import {pool} from '../db.js'

export const getUsuario = async (req, res) => {
    try {
        const {telefono, password} = req.body
        const [result] = await pool.query('SELECT u.id idusuario, u.nombre nombreusuario, u.esprimeravez, u.esadministrador, u.esseguridad, u.essuperadmin, u.esresidente, u.idprivada, p.nombre nombreprivada, u.casa FROM privada p INNER JOIN usuario u ON p.id = u.idprivada AND p.activo = 1 AND u.telefono = ? AND u.password = ? AND u.esmoroso = 0', [telefono, password])
        if(result != null && result.length < 1){
            return res.status(401).json({
                success: false,
                message: 'Datos incorrectos'
            })
        }       
        res.status(200).json({
            success: true,
            data: result[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error al loguearse'
        })
    }    
}

export const setUsuario = async (req, res) => {
    try {
        const {nombre, password, telefono, idprivada, casa, esprimeravez, esadministrador, esmoroso, esseguridad, essuperadmin, esresidente} = req.body
    await pool.query('INSERT INTO usuario(nombre,password,telefono,idprivada,casa,esprimeravez,esadministrador,esmoroso,esseguridad,essuperadmin,esresidente) VALUES(?,?,?,?,?,?,?,?,?,?,?)', [nombre, password, telefono, idprivada, casa, esprimeravez, esadministrador, esmoroso, esseguridad, essuperadmin, esresidente])
    res.send({
        success : true
    })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al guardar usuario'
        })
    }    
}

export const putUsuario = async (req, res) => {
    try {
        const {nombre, password, telefono, idprivada, casa, esprimeravez, esadministrador, esmoroso, esseguridad, essuperadmin, esresidente, id} = req.body
        await pool.query('UPDATE usuario SET nombre = ?, password = ?, telefono = ?, idprivada = ?, casa = ?, esprimeravez = ?, esadministrador = ?, esmoroso = ?, esseguridad = ?, essuperadmin = ?, esresidente = ? WHERE id = ?', [nombre, password, telefono, idprivada, casa, esprimeravez, esadministrador, esmoroso, esseguridad, essuperadmin, esresidente, id])
        res.send({
            success : true
        }) 
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar usuario'
        })
    }    
}

export const putUsuarioPass = async (req, res) => {
    try {
        const {password, id} = req.body
        await pool.query('UPDATE usuario SET password = ?, esprimeravez = 0 WHERE id = ?', [password, id])
        res.send({
            success : true
        }) 
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar usuario'
        })
    }    
}

export const deleteUsuario = async (req, res) => {
    try {
        const {id} = req.body
        await pool.query('delete usuario WHERE id = ?', [id])
        res.send({
            success : true
        }) 
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar usuario'
        })
    }    
}