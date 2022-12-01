import Link from "next/link";
import ImageUpload from '../../components/ImageUpload'
import flatsController from "../../controllers/flatsController";
import styles from '../../styles/Home.module.css'


function CreateFlat(props) {
  const id = 1 //will get it from session of current user
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>The form Page to create Flat</h1>
      <Link href="/">Back to Home page</Link>

      <div className={styles.container}>
        <h1>Create new flat</h1>
        <form action="/api/flats" method="POST">
          <input hidden name="UserId" defaultValue={id} />
          <label htmlFor="type">Type of the house:</label><br />
          <input type="text" id="type" name="type" /><br />
          <label htmlFor="description">Tell more details:</label><br />
          <input type="text" id="description" name="description" /><br />
          <label htmlFor="location">the adress:</label><br />
          <input type="text" id="location" name="location" /><br /><br />
          {/* <ImageUpload ></ImageUpload> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(req, res) {

  const userId = 1 //will get curUser from session
  const flats = await flatsController.findAll()

  return {
    props: { flats }
  }

}

export default CreateFlat;
