import { getSession } from "next-auth/react";
import Map from "../components/map"
import HomePage from "../components/Home/HomePage";
import flatsController from "../controllers/flatsController";

export default function Home(props) {
  return (
    <div>
      <h1>Home page</h1>
      <HomePage flats={props.flats} />
      <Map flats={props.flats}/>
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const flats = await flatsController.findAll();

  return {
    props: { flats },
  };
}
