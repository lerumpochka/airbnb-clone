import styled from "styled-components";
import Link from "next/link";

export default function Home(props) {
  return (
    <HomePageContainer>
      <Title>Home Page</Title>
      <h1>All the possible routes that we need to implement</h1>
      <WrapContainer>
        <Wrap>
          <h1>User</h1>
          <span>Login:</span>
          <Link href="/login">Login</Link>
          <br />
          <br />
          <span>see flat details: </span>
          <Link href="/flats/23">/flats/23</Link>
          <br />
          <br />
          <span>Location page of Flat: </span>
          <Link href="/flats/location/flatId">/flats/location/flatId</Link>
        </Wrap>
        <Wrap>
          <h1>Seller</h1>
          <span>create a flat &#40;form&#41;: </span>
          <Link href="/flats/create">/flats/create</Link>
          <br />
          <span>Post a flat&#40;post method&#41;: </span>
          <Link href="/api/flats/post">/api/flats/post</Link>
          <br />
          <br />
          <span>Edit a flat&#40;form&#41;: </span>
          <Link href="/flats/modify/12">/flats/modify/12</Link>
          <br />
          <span>Edit a flat&#40;put method&#41;: </span>
          <Link href="/api/flats/modify">/api/flats/modify</Link>
          <br />
          <br />
          <span>Delete a flat: </span>
          <Link href="/flats/delete/99">/flats/delete/99</Link>
          <br />
          <span>Delete a flat&#40;delete method&#41;: </span>
          <Link href="/api/flats/delete/99">/api/flats/delete/99</Link>
          <br />
          <br />
          <span>All the seller flats: </span>
          <Link href="/profile/flats/owner">/profile/flats/owner</Link>
        </Wrap>
        <Wrap>
          <h1>Buyer</h1>
          <span>buyer can book a flat: </span>
          <Link href="/flats/book/45">/flats/book/45</Link>
        </Wrap>
      </WrapContainer>
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 40px 0 10px;
`;

const WrapContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const Wrap = styled.div``;
