const { Link } = ReactRouterDOM;

import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, setNotes, onChangeColor }) {
  return (
    <section className="note-list grid-container">
      {notes.map((note) => (
        <article key={note.id}>
          <NotePreview
            note={note}
            notes={notes}
            setNotes={setNotes}
            onChangeColor={onChangeColor}
          />
        </article>
      ))}
    </section>
  );
}
