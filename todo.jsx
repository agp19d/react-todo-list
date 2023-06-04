// todo.jsx
function Todo({ todo, index, remove }) {
    return (
      <div className="todo" key={index}>
        {todo.text}
        <button 
          className="remove-btn" 
          onClick={() => remove(index)}
        >
          Remove
        </button>
      </div>
    );
  }
  