import { useRouter } from "next/router";

export default function Book() {
  const { query } = useRouter();
  console.log(query);
  return <div>Book</div>;
}
