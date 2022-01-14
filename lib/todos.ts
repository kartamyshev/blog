const BASE_URL = "https://jsonplaceholder.typicode.com";

interface TodosInterface {
  getAll(): Promise<any>;
  getSingleTodo(id: number): Promise<any>;
  removeTodo(id: number): Promise<any>;
}

class Todos implements TodosInterface {
  getAll = async () => {
    const response = await fetch(`${BASE_URL}/todos?_limit=10`);
    const data = await response.json();

    return data;
  };

  getSingleTodo = async (id) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`);
    const todo = await response.json();
    return todo;
  };

  removeTodo = async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
  };
}

export default new Todos();
