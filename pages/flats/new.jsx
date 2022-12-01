import NewFlatForm from "../../components/NewFlat/NewFlatForm";
// import flatsController from "../../controllers/flatsController";

function CreateFlat(props) {
  const id = 1; //will get it from session of current user
  return (
    <div>
      <NewFlatForm />
    </div>
  );
}

// export async function getServerSideProps(req, res) {
//   const userId = 1; //will get curUser from session
//   const flats = await flatsController.findAll();

//   return {
//     props: { flats },
//   };
// }

export default CreateFlat;
