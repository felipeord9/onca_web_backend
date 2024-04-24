const EmpleadoService = require('../services/empleadosService')

const findAllEmpleados = async(req,res,next)=>{
    try{
        const data=await EmpleadoService.find()

        res.status(200).json({
            message:'OK',
            data
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

const findOneCliente = async (req, res, next) => {
    try {
      const { params: { id } } = req;
      const data = await ClienteService.findOne(id);
  
      res.status(200).json({
        message: 'OK',
        data
      })
    } catch (error) {
      next(error)
    }
  };

const deleteCliente = async(req,res,next)=>{
    try{
        const {params:{id}}=req
        const data = await ClienteService.remove(id)
        res.status(200).json({
            message:'Deleted',
            data
        })
    } catch(error){
        next(error)
    }
}

module.exports = {
    findAllClientes,
    createCliente,
    findOneCliente,
    deleteCliente
}