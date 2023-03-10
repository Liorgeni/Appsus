import { noteService } from "../services/note.service.js";
const { Link } = ReactRouterDOM;

import { ColorSelect } from "./note-color.jsx";

export function NoteBar({
  note,
  notes,
  setNotes,
  onChangeColor,
  onToggleIsPinned,
}) {
  function onRemoveNote(noteId) {
    noteService.remove(noteId).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  }

  function changeColor(color) {
    onChangeColor(note, color);
  }

  return (
    <section className="note-bar-container">
      <ul className="style-container flex clean-list space-between">
        <span
          className="material-symbols-outlined pin bar"
          onClick={() => onToggleIsPinned(note, !note.isPinned)}
        >
          push_pin
        </span>
        <li>
          {/* <span className="material-symbols-outlined bar">mail</span> */}
          <Link to={`/note/${note.id}`}>
            <span className="material-symbols-outlined bar">edit</span>
          </Link>
        </li>

        <li>
          <div className="platte-colors wrap flex justify-center">
            <span className="material-symbols-outlined bar">palette</span>
            <ColorSelect changeColor={changeColor} />
          </div>
        </li>
        <li
          className="material-symbols-outlined bar"
          onClick={() => onRemoveNote(note.id)}
        >
          delete
        </li>
      </ul>
    </section>
  );
}
