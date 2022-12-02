import NavBar from "../../components/Home/NavBar";
import NewFlatForm from "../../components/NewFlat/NewFlatForm";
// import flatsController from "../../controllers/flatsController";
import { getSession } from "next-auth/react";

function CreateFlat(props) {
  const id = 1; //will get it from session of current user
  return (
    <div>
      <NavBar />
      <NewFlatForm />
    </div>
  );
}

export async function getServerSideProps(req, res) {
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
    props: { currentUser: session?.user || null },
  };
}

export default CreateFlat;
