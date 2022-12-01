
import { getSession } from "next-auth/react";
import HomePage from "../components/Home/HomePage";
import flatsController from "../controllers/flatsController"


export default function Home(props) {

  return (
    <div>
      <HomePage flats={props.flats} />
    </div>
  );
}



export async function getServerSideProps(req, res) {

 const flats = await flatsController.findAll()

  const session = await getSession(req);
  console.log("session ", session);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `login`,
      },
    };
  }

  return {
    props: { flats, currentUser: session?.user || null },
  };
}
