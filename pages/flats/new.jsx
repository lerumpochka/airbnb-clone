import Link from "next/link";

function CreateFlat() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>The form Page to create Flat</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default CreateFlat;
