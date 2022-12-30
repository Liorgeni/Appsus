import { noteService } from "../services/note.service.js";

import { ColorSelect } from "./note-color.jsx";

export function NoteBar({ note, notes, setNotes }) {
  function onRemoveNote(noteId) {
    noteService.remove(noteId).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  }

  function onChangeColor() {
    console.log("change color");
  }

  function onPinNote(noteId) {
    console.log("Note pinned", noteId);
  }

  return (
    <section className="note-bar-container">
      <ul className="style-container flex clean-list space-between">
        <span
          className="material-symbols-outlined pin bar"
          onClick={() => onPinNote(note.id)}
        >
          push_pin
        </span>

        <li
          className="material-symbols-outlined bar"
          onClick={() => onRemoveNote(note.id)}
        >
          delete
        </li>
        <li>
          <div className="platte-colors wrap flex justify-center">
            <span className="material-symbols-outlined bar">palette</span>
            <ColorSelect onChangeColor={onChangeColor} noteId={note.id} />
          </div>
        </li>
        <li>
          <span className="material-symbols-outlined bar">mail</span>
        </li>
      </ul>
    </section>
  );
}
