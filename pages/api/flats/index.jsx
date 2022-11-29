export default async function handler(req, res) {
  if (req.method == "POST") {
    const { title, description, imageUrl } = req.body;
    try {
      const cocktail = await cocktailController.create({
        title,
        description,
        imageUrl,
      });
      res.status(200).redirect(`/cocktails/${cocktail.id}`);
    } catch (error) {
      console.log(error.message);
      res.status(500).redirect(`/cocktails/new?error=missing title or description`);
    }
  }
}
