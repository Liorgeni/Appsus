export function NoteVideo({ note }) {
  const url = note.info.url.replace("watch?v=", "embed/");

  return (
    <div>
      <iframe src={url} frameborder="0" allowfullscreen></iframe>
    </div>
  );
}
