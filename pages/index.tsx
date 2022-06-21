import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components/index";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Кукуруза</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="l"> sfasfasf </P>
      <Tag size="m" color="primary">Green</Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true}></Rating>
    </>
  );
}

export default withLayout(Home);