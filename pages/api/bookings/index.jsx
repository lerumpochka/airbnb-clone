import bookingsController from "../../../controllers/bookingsController"

export default async function handler(req, res) {

  if (req.method == "POST") {
    const data = req.body
    try {
      await bookingsController.create(data)
      res.status(200).json({msg: data})
      // .redirect(`/profile`) 
    } catch (error) {
      console.log(error.message);
      res.status(400).json("Error")
      // .redirect(`/`);
    }
  }
}