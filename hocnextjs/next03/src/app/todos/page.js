import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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
