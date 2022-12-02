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
  },
  create: async (data) => {
    const flat =await db.Flat.create(data)
    return JSON.parse(JSON.stringify(flat))
  }
}
const token = "mapbox access token.."
const controller = {
 create: async (req) => {
   const { name, address, UserId } = req.query;
   const user = await db.User.findOne({ where: { email: UserId } })
   const resp = await fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}`,
     { method: 'GET' })
   const obj = await resp.json()
   const [ lon, lat ] = obj.features[0].geometry.coordinates
   return await db.Flat.create({
       name, address, UserId: user.id, lat, lon
     }) // remember to add lat and lon to the Models through a migration
 },
}

export default flatsController;
