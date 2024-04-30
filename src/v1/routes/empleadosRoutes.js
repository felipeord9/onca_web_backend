const express = require("express");
const EmpleadoController = require("../../controllers/empleadoController");

const router = express.Router();

/* router.use(
  passport.authenticate('jwt', { session: false }), 
  checkRoles('admin')
)
 */
router
  .get("/", EmpleadoController.findAllEmpleados)
  .get("/:id", EmpleadoController.findOneEmpleado)
  .patch('/:id', EmpleadoController.updateEmpleado)
  .delete('/:id', EmpleadoController.deleteEmpleado);

module.exports = router