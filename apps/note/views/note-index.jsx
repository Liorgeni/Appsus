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

  console.log("notes", notes);

  return (
    <section className="note-index">
      <div>
        <input type="text" placeholder="Add new note" />
        <select>
          <option value="">Select note type</option>
          <option>Text</option>
          <option>To do</option>
          <option>Image</option>
          <option>Video</option>
          <option>Record</option>
        </select>
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </section>
  );
}
// onChange={ev => setCmpType(ev.target.value)}
