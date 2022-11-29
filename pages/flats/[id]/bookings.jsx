import { useRouter } from "next/router";
import Link from "next/link";

function ShowBookedFlats() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>Page to book a Flat {id}</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default ShowBookedFlats;
