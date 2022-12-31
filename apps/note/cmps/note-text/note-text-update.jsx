export function NoteTextUpdate({ note, onUpdateNote }) {
  function inputChange(ev) {
    const value = ev.target.value;
    note.info.txt = value;
    onUpdateNote(note.type, value);
  }

  return (
    <div className="text-update-container flex-grow flex align-center">
      <h3>Edit text</h3>
      <input onChange={inputChange} type="txt" />
    </div>
  );
}
