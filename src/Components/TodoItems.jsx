import "./CSS/TodoItems.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";

const TodoItems = ({ no, display, text, setTodos }) => {

  const deleteTodoList = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    localStorage.setItem("todos", JSON.stringify(data));
    setTodos(data);
  };

  const toggle = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        data[i].display = data[i].display === "" ? "line-through" : "";
        break;
      }
    }
    localStorage.setItem("todos", JSON.stringify(data));
    setTodos(data);
  };

  return (
    <div className="todoItems">
      <div
        className={`todoItems-container ${display}`}
        onClick={toggle}
      >
        {display === "" ? <ImCheckboxUnchecked className="checked"/> : <TiTick className="checked"/>}
        <div className="todo-items-text" style={{ textDecoration: display }}>{text}</div>
      </div>
      <ImCross onClick={() => deleteTodoList(no)} className="cross-icon" />
    </div>
  );
};

export default TodoItems;
