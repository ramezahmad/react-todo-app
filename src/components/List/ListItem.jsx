import cross from "../../../images/icon-cross.svg";
import check from "../../../images/icon-check.svg";

export default function ListItem({ darkMode, todo, onToggleComplete, removeTodo }) {
  const handleClick = () => {
    onToggleComplete(todo.id); // Pass the todo id to the parent component to toggle completion
  };
  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  return (
    <li className={darkMode === false ? 'border-bottom-light': null}>
      <div className="clickableContainer" onClick={handleClick}>
        <div className="checkMark">
          <button className={`${darkMode === false? "checkMark-inner-light" : null} ${todo.isCompleted === true ? 'checked' : null}`}>
            <img src={todo.isCompleted === true ? check : null} alt="" />
          </button>
        </div>
        <div className={`list-item-text`}>
          <p
            className={`${darkMode === false ? "light-bg-font" : ""} ${todo.isCompleted === true ? "completed text-opacity" : ""}`}
          >
            {todo.todoText}
          </p>
        </div>
      </div>
      <div className="remove-item">
        <button onClick={handleRemoveClick}>
          <img src={cross} alt="" />
        </button>
      </div>
    </li>
  );
}
