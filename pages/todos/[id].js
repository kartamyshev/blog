import Head from "next/head";
import Layout from "../../components/layout";
import todos from "../../lib/todos";
import utilStyles from "../../styles/utils.module.css";

export async function getServerSideProps({ params }) {
  const todo = await todos.getSingleTodo(params.id);

  return {
    props: {
      todo,
    },
  };
}

export default function Todo({ todo }) {
  return (
    <Layout>
      <Head>
        <title>{todo.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{todo.title}</h1>
        <div className={utilStyles.lightText}>Id: {todo.id}</div>
        <div className={utilStyles.lightText}>
          Status: {todo.completed ? "Done" : "Pending"}
        </div>
        <div className={utilStyles.lightText}>User: {todo.userId}</div>
      </article>
    </Layout>
  );
}
