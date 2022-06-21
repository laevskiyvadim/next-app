import { Button, Htag, P, Tag } from "../components/index";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Text</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="l"> sfasfasf </P>
      <Tag size="m" color="primary">Green</Tag>
    </div>
  );
}