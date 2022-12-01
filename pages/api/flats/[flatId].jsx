export default function handler(req, res) {
  if (req.method === "GET") {
  } else if (req.method == "POST") {
    console.log(req.body);
  } else if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
  }
}
