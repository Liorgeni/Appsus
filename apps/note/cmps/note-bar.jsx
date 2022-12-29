import { noteService } from "../services/note.service.js";

import { ColorSelect } from "./note-color.jsx";

export function NoteBar({ notes, note, setNotes }) {
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
    console.log("Note pinned");
  }

  return (
    <ul className="style-container flex clean-list space-between">
      <span
        className="material-symbols-outlined pin"
        onClick={() => onPinNote(note.id)}
      >
        push_pin
      </span>

      <li
        className="material-symbols-outlined"
        onClick={() => onRemoveNote(note.id)}
      >
        delete
      </li>
      <li>
        <div className="platte-colors">
          <span className="material-symbols-outlined">palette</span>
          <ColorSelect onChangeColor={onChangeColor} />
        </div>
        <span className="material-symbols-outlined">mail</span>
      </li>
    </ul>
  );
}
