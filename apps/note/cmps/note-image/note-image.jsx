export function NoteImage({ note }) {
  console.log("noteeeeee", note);
  return (
    <div>
      <img src={note.info.url} />
    </div>
  );
}
