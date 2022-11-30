import db from "../database/index.js"

const flatsController = {
  find: async (id) => {
    const flat =await db.Flat.findOne(id)
    return JSON.parse(JSON.stringify(flat))
  },
  findAll: async () => {
    const flats = await db.Flat.findAll()
    return JSON.parse(JSON.stringify(flats))
  },
  //to see all owned flats for curtain user (owner) in profile
  all: async (id) => {
    const flats = await db.Flat.findAll({where: {UserId: id}})
    return JSON.parse(JSON.stringify(flats))
  },
   //findOne gave a strange error,I've created this method untill we fix
   book: async (id) => {
    const flat =await db.Flat.findByPk(id)
    return JSON.parse(JSON.stringify(flat))
  }
}

export default flatsController;
