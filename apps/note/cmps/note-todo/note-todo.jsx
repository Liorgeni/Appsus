export function NoteToDo({ note }) {
  //   onToggleDoneTodo=(event)=>{
  //     this.props.onToggleDoneTodo(this.props.note.id,event.target.id)
  //     event.preventDefault();
  // }
  console.log(note, "lklklklkl");
  return (
    <ul>
      {note.info.todos.map((todo) => {
        console.log("todo", todo);
        const isDone = todo.isDone ? "done" : "";
        return (
          <li className="todo-item ">
            <p className={isDone} id={note.id}>
              {todo.txt}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

// onClick={onToggleDoneTodo}
