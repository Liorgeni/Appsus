export function NotePreview({ note }) {
  return (
    <article className="note-preview">
      <h2>{note.id}</h2>
      <p>Description: {note.type}</p>
      <p>sfsdfs</p>
      <p>{note.info.txt}</p>
    </article>
  );
}
