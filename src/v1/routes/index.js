const express = require('express')
const UserRoutes = require('./userRoutes')
const MailRoutes = require('./mailRoutes')
const AuthRoutes = require('./authRoutes')
const ClienteController = require('./clienteRoutes')
const SuscripcionController = require('./suscripcionRoutes')
const EmpleadoController = require('./empleadosRoutes')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1/', router)

    router.use('/auth', AuthRoutes)
    router.use('/users', UserRoutes)
    router.use('/mail', MailRoutes)
    router.use('/clientes',ClienteController)
    router.use('/suscripcion',SuscripcionController)
    router.use('/empleados',EmpleadoController)
}

module.exports = routerApi