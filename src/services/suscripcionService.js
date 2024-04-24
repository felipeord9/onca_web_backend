const { models } = require("../libs/sequelize");

const find=()=>{
    const Suscripciones = models.Suscripcion.findAll({
        include:[
            "cliente"
        ]
    })
    return Suscripciones
};

const create = async(body)=>{
    const newSuscripcion = await models.Suscripcion.create(body)
    return newSuscripcion  
}

const findOne = async (id) => {
    const Suscripcion = await models.Suscripcion.findByPk(id)
  
    if(!Suscripcion) throw boom.notFound('Suscripcion no encontrado')
  
    return Suscripcion
}

const remove = async(id)=>{
    const Suscripcion = findOne(id)
    ;(await Suscripcion).destroy(id)
}

module.exports={
    find,
    create,
    findOne,
    remove
}