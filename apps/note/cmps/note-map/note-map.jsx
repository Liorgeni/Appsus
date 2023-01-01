export function NoteMap({ note }) {
  return (
    <div className="innerNote innerNote-map">
      <iframe
        width="220"
        height="300"
        id="gmap_canvas"
        src={`https://maps.google.com/maps?q=${note.info.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      ></iframe>
    </div>
  );
}
