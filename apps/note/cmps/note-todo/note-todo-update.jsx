export function NoteToDoUpdate({ handleChange, onSaveNote, noteToEdit }) {
  return (
    <div className="text-update-container flex-grow flex align-center">
      <h3>Edit Todo list</h3>
      <form onSubmit={onSaveNote}>
        <input
          onChange={handleChange}
          name="todo"
          id="todo"
          type="text"
          defaultValue={noteToEdit.info.txt}
        />
      </form>
    </div>
  );
}
