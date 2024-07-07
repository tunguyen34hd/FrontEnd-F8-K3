import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
export const metadata = {
   title: "Danh sach cong viec",
   description: "Quan ly cong viec",
};

const TodoPage = () => {
   return (
      <div>
         <h1>Todo App</h1>
         <TodoList />
         <TodoForm />
      </div>
   );
};

export default TodoPage;
