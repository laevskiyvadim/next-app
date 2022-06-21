import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components/index";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag='h1'>Кукуруза</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="l"> sfasfasf </P>
      <Tag size="m" color="primary">Green</Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true}></Rating>
    </div>
  );
}