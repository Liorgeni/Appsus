export function NoteToDo({ note }) {
  //   onToggleDoneTodo=(event)=>{
  //     this.props.onToggleDoneTodo(this.props.note.id,event.target.id)
  //     event.preventDefault();
  // }

  console.log("note", note);

  return (
    <ul className="innerNote">
      <h1>{note.info.lable}</h1>

      {note.info.todos.map((todo, i) => {
        console.log("todo", todo);
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
