import NavBar from "../../components/Home/NavBar";
import NewFlatForm from "../../components/NewFlat/NewFlatForm";
// import flatsController from "../../controllers/flatsController";
import { getSession } from "next-auth/react";
import db from "../../database";


function CreateFlat(props) {
  
  return (
    <div>
      <NavBar />
      <NewFlatForm user={props.user} />
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `login`,
      },
    };
  }
  const userName = session.user.name;
  const userData = await db.User.findOne({where: {name: userName}})
  const user = JSON.parse(JSON.stringify(userData))

  return {
    props: { user },
  };
}

export default CreateFlat;
