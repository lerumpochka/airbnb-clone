export default function handler(req, res) {
  const { flatId } = req.query;
  res.status(200).json({ page: `flat ID ${parseInt(flatId)} deleted` });
}
