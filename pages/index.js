import HomePage from "../components/Home/HomePage";
import flatsController from "../controllers/flatsController"

export default function Home(props) {

  return (
    <div>
      <HomePage flats={props.flats} />
    </div>
  );
}
export async function getServerSideProps (req, res) {
 const flats = await flatsController.findAll()
 return {
    props: { flats }
}
}
