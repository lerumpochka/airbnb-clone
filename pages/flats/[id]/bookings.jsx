import { useRouter } from "next/router";
import Link from "next/link";
import flatsController from "../../../controllers/flatsController";


function ShowBookedFlats(props) {
  const router = useRouter();
  const id = router.query.id;
  
  const userId = 1 //from where to get??? session or???
  const flat = props.flat

  return (
    <>
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>Page to book a Flat {id}</h1>
      <Link href="/">Back to Home page</Link>
    </div>

    <h3>Book this flat</h3>
    <form action="/api/bookings" method="POST">
      <input hidden name="FlatId" value={flat.id}/>
      <input hidden name="UserId" value={userId} />
      
      <label htmlFor="startDate">Start Date</label>
      <input type='date' id="startDate" name="startDate" />
      <label htmlFor="endDate">End Date</label>
      <input type='date' id="endDate" name="endDate" />
      <br />
      <input type="submit" value="Book"/>
    </form>
    </>
  );
}
 
export async function getServerSideProps(req, res) {
  const flatId = req.query.id 
  const flat = await flatsController.book(flatId)
  return {
    props: { flat }

  }

}

export default ShowBookedFlats;
