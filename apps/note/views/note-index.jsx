const { useState, useEffect } = React;
const { Link } = ReactRouterDOM;

import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from "../services/note.service.js";

export function NoteIndex() {
  const [notes, setNotes] = useState(noteService.getNotes());

  useEffect(() => {
    loadNotes();
  }, [notes]);

  function loadNotes() {
    noteService.getNotes();
    setNotes(notes);
  }

  console.log("notes", notes);

  return (
    <section className="note-index">
      <div>
        <NoteList notes={notes} />
      </div>
      <div></div>
    </section>
  );
}
