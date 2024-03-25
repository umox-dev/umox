'use server';

export default async function Title(props: { text: string }) {
  const { text } = props;
  return <p>{text}</p>;
}
