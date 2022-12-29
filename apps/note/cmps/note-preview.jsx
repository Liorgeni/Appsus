import { NoteBar } from "./note-bar.jsx";

import { NoteImage } from "./note-image/note-image.jsx";
import { NoteVideo } from "./note-video/note-video.jsx";
import { NoteText } from "./note-text/note-text.jsx";
import { NoteRecord } from "./note-record/note-record.jsx";

export function NotePreview({ note, notes, setNotes }) {
  return (
    <article key={note.id} className={`${note.type} note-preview`}>
      <h2>{note.info.title}</h2>
      <p>Type: {note.type}</p>
      <p>{note.info.txt}</p>
      <NoteBar note={note} notes={notes} setNotes={setNotes} />
      <NoteImage />
      <NoteVideo />
      <NoteText />
      <NoteRecord />
    </article>
  );
}
