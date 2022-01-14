import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import todos from "../../lib/todos";

export const getServerSideProps = async () => {
  const data = await todos.getAll();

  return {
    props: {
      todos: data,
    },
  };
};

export default function Todos({ todos }) {
  return (
    <Layout>
      <Head>
        <title>Todos</title>
      </Head>
      <ul className={utilStyles.list}>
        {todos.map((todo) => {
          return (
            <li
              className={`${utilStyles.listItem} ${utilStyles.todoItem}`}
              key={todo.id}
            >
              <Link href={`/todos/${todo.id}`}>
                <a>{todo.title}</a>
              </Link>
              <button onClick={() => todos.removeTodo(todo.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
