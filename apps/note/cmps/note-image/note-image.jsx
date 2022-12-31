export function NoteImage({ note }) {
  return (
    <div>
      <img src={note.info.url} />
    </div>
  );
}
