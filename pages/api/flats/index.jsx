import flatsController from "../../../controllers/flatsController";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    console.log('------------data---', data);
const id = 2

    try {
      await flatsController.create(data);
      res.status(200).json({data:data})
      // .redirect(`/flats/${id}`) //need to redirect to profile of current user
    } catch (error) {
      res.status(400).send("error");
    }
  }
}
