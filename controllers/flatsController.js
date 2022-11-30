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
 //create: async (data) => {
   //const user = await db.User.create(data)
   //return JSON.parse(JSON.stringify(user))
 //}
}

export default flatsController;
