import db from "../database/index.js"

const bookingsController = {

  all: async (id) => {
    const bookings = await db.Booking.findAll(
      {
        where: { UserId: id }
      })
    return JSON.parse(JSON.stringify(bookings))
  },
  create: async (data) => {
    const booking = await db.Booking.create(data)
    return JSON.parse(JSON.stringify(booking))
  }

}

export default bookingsController;
