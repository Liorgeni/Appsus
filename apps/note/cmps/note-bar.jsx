import { noteService } from "../services/note.service.js";

export function NoteBar({ notes, note, setNotes }) {
  function onRemoveNote(noteId) {
    noteService.remove(noteId).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  }

  return (
    <ul className="style-container flex space-between clean-list">
      <li
        className="material-symbols-outlined"
        onClick={() => onRemoveNote(note.id)}
      >
        delete
      </li>
      <input
        className="trans"
        type="color"
        id="style2"
        // oninput="onChangeTextColor(this.value)"
      />
      <li>
        <label htmlFor="style2">
          <span className="material-symbols-outlined">palette</span>
        </label>
      </li>
    </ul>
  );
}
