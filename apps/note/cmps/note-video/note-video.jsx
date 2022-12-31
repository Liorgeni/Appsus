export function NoteVideo({ note }) {
  const url = note.info.url.replace("watch?v=", "embed/");

  return (
    <div>
      <iframe src={url} frameBorder="0" allowFullScreen></iframe>
    </div>
  );
}
