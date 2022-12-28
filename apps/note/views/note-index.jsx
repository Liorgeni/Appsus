const { useState, useEffect } = React;
const { Link } = ReactRouterDOM;

import { NoteList } from "../cmps/note-list.jsx";
import { noteService } from "../services/note.service.js";

export function NoteIndex() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  function loadNotes() {
    noteService.query().then((notesToUpdate) => {
      setNotes(notesToUpdate);
    });
  }

  function onRemoveNote(noteId) {
    noteService.remove(noteId).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  }

  console.log("notes", notes);

  return (
    <section className="note-index">
      <div>
        <input type="text" placeholder="Add new note" />
        <NoteList notes={notes} onRemoveNote={onRemoveNote} />
      </div>
      <div></div>
    </section>
  );
}
