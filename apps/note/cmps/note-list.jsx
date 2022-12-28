const { Link } = ReactRouterDOM;

import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes }) {
  return (
    <section className="note-list grid-container">
      {notes.map((note) => (
        <article key={note.id}>
          <NotePreview note={note} />
        </article>
      ))}
    </section>
  );
}

{
  /* <div>
<Link to={`/note/${note.id}`}>More info</Link>
</div> */
}
