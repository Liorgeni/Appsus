NoteBar;

import { NoteBar } from "./note-bar.jsx";

export function NotePreview({ note, notes, setNotes }) {
  return (
    <article key={note.id} className="note-preview">
      <h2>{note.info.title}</h2>
      <p>Type: {note.type}</p>
      <p>{note.info.txt}</p>
      <NoteBar note={note} notes={notes} setNotes={setNotes} />
    </article>
  );
}
