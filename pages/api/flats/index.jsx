import flatsController from "../../../controllers/flatsController";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    try {

      const flat = await flatsController.create(data);

      res.status(200).redirect(`/profile`)
      // .redirect(`/flats/${flat.id}`) 

    } catch (error) {
      res.status(400).send("error");
    }
  }
}
