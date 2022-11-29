import flatsController from "../controllers/flatsController"

export default function Flats(props) {
    console.log(props)
    return (
        <>
            <h1>Flats</h1>
        </>
    )
}


export async function getServerSideProps() {
    const flats = await flatsController.findAll();
    console.log(flats)
    return {
        props: { flats }
    }

}