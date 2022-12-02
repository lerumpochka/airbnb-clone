import HomePage from "../components/Home/HomePage";
import bookingsController from "../controllers/bookingsController";
import flatsController from "../controllers/flatsController";
import { getSession } from "next-auth/react";
import db from "../database";

export default function Home(props) {
  console.log(props.bookings);
  return (
    <div>
      <HomePage flats={props.flats} bookings={props.bookings} />
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const flats = await flatsController.findAll();

  const session = await getSession(req);

  const userName = session.user.name;
  const userData = await db.User.findOne({ where: { name: userName } });
  const user = JSON.parse(JSON.stringify(userData));
  const bookings = await bookingsController.all(user.id); // [{},{}]

  return {
    props: { flats, bookings },
  };
}
