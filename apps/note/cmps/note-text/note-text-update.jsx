export function NoteTextUpdate({ handleChange, onSaveNote, noteToEdit }) {
  return (
    <div className="text-update-container flex-grow flex align-center">
      <h3>Edit text</h3>
      <form onSubmit={onSaveNote}>
        <input
          onChange={handleChange}
          name="txt"
          // id="txt"
          type="text"
          defaultValue={noteToEdit.info.txt}
        />
      </form>
    </div>
  );
}
