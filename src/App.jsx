import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container"> 
      <AppName />
      <AddTodo />
      <div className="Item">
        <TodoItem />
        <TodoItem2 />
      </div>
      
    </center>
  );
}

export default App;
