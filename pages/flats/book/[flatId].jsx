import { useRouter } from "next/router";
import Link from "next/link";

function BookFlat() {
  const router = useRouter();
  const flatId = router.query.flatId;
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>Page to book a Flat {flatId}</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default BookFlat;
