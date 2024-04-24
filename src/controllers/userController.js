const UserService = require("../services/userService");
const EmpleadoService = require("../services/empleadosService");

const findAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneUser = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await UserService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createUser = async (req, res, next) => {
  try {
    const { body } = req
    console.log(body)
    const data = await UserService.create({
      email:body.email,
      password:body.password,
      role:body.role,
    })
    const empleado = await EmpleadoService.create({
      rowId:body.cedula,
      nombre:body.nombre,
      genero:body.genero,
      especialidad:body.especialidad,
      cronograma:body.cronograma,
      estado:body.estado,
      userId:data.id,
    })
    res.status(201).json({
      message: 'Created',
      data,empleado
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await UserService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await UserService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllUsers,
  findOneUser,
  createUser,
  updateUser,
  deleteUser
};