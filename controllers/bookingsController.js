import db from "../database/index.js"

const bookingsController = {

 all: async (id) => {
   const bookings = await db.Booking.findAll(
    {
       where: {UserId: id}
    })
   return JSON.parse(JSON.stringify(bookings))
 },

}

export default bookingsController;
