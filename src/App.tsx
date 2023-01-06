import "./App.css";
import Todos from "./components/Todos";
import Todo from "./assets/types/todo";

const App = () => {
  const todos = [new Todo("Text one"), new Todo("Text two")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
};

export default App;
