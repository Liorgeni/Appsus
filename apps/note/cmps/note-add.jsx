const { useEffect, useState } = React;

import { noteService } from "../services/note.service.js";

export function NoteAdd() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  useEffect(() => {
    loadUpdatedNotes();
  }, []);

  function onAddNote(note) {
    console.log(note);

    noteService.save(note);
  }

  function loadUpdatedNotes() {
    noteService.query().then((note) => {
      setNotes(note);
    });
  }

  //   function checkPlaceholder() {

  //   }

  return (
    <section className="note-add">
      <ul className="flex clean-list space-between">
        <input className="new-note" type="text" placeholder="Add new note" />
        <li>
          <span className="material-symbols-outlined">text_format</span>
        </li>
        <li>
          <span className="material-symbols-outlined">checklist</span>
        </li>
        <li>
          <span className="material-symbols-outlined">imagesmode</span>
        </li>
        <li>
          <span className="material-symbols-outlined">movie</span>
        </li>
        <li>
          <span className="material-symbols-outlined">
            radio_button_checked
          </span>
        </li>
        <li>
          <span
            className="material-symbols-outlined"
            onClick={() => onAddNote(note)}
          >
            note_add
          </span>
        </li>
      </ul>
    </section>
  );
}
