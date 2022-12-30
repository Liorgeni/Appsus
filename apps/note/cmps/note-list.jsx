const { Link } = ReactRouterDOM;

import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, setNotes }) {
  function onChangeColor(noteId, color) {}

  return (
    <section className="note-list grid-container">
      {notes.map((note) => (
        <article key={note.id} className={onChangeColor(note)}>
          <NotePreview note={note} notes={notes} setNotes={setNotes} />
        </article>
      ))}
    </section>
  );
}
