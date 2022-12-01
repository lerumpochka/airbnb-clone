import { getSession } from "next-auth/react";

export default function Home(props) {
  return (
    <div>
      <h1>Home page</h1>
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

