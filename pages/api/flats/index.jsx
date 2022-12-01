import flatsController from "../../../controllers/flatsController";



export default async function handler(req, res) {
  const data = req.body
  if (req.method == "POST") {
    const data = req.body

    try {
      await flatsController.create(data)
      res.status(200).redirect(`/profile`) //need to redirect to profile of current user
    } catch (error) {

      res.status(400).redirect(`/flats`);
    }
  }
}