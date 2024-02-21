export default function Input({ mode, onKeyDown, onChange, value }) {
  return (
    <section className={`todo-input ${mode ? "" : "light-bg-color"}`}>
      <div className="checkMark">
        <button className={mode === false? "checkMark-inner-light" : null}>
          <img src="" alt="" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Create a new todo..."
        className={mode === false ? "light-bg-font" : null}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value} 
      />
    </section>
  );
}