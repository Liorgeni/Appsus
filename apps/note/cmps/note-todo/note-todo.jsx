export function NoteToDo({ note }) {
  //   onToggleDoneTodo=(event)=>{
  //     this.props.onToggleDoneTodo(this.props.note.id,event.target.id)
  //     event.preventDefault();
  // }

  return (
    <ul className="innerNote">
      <h1 className="todo-title">Todo!</h1>

      {note.info.todos.map((todo, i) => {
        const isDone = todo.isDone ? "done" : "";
        return (
          <li className="todo-item " key={i}>
            <p className={isDone}>{todo.txt}</p>
          </li>
        );
      })}
    </ul>
  );
}

// onClick={onToggleDoneTodo}
