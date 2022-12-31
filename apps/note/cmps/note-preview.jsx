import { NoteBar } from "./note-bar.jsx";
const { Link } = ReactRouterDOM;

import { NoteImage } from "./note-image/note-image.jsx";
import { NoteVideo } from "./note-video/note-video.jsx";
import { NoteText } from "./note-text/note-text.jsx";
import { NoteMap } from "./note-record/note-record.jsx";
import { NoteToDo } from "./note-todo/note-todo.jsx";

import { NoteType } from "../global.vars.js";

export function NotePreview({
  note,
  notes,
  setNotes,
  onChangeColor,
  onToggleIsPinned,
}) {
  function getNote(noteType) {
    switch (noteType) {
      case NoteType.text:
        return <NoteText note={note} />;
      case NoteType.todo:
        return <NoteToDo note={note} />;
      case NoteType.image:
        return <NoteImage note={note} />;
      case NoteType.video:
        return <NoteVideo note={note} />;
      case NoteType.map:
        return <NoteMap note={note} />;
    }
  }

  return (
    <article
      key={note.id}
      className={`${note.type} note-preview`}
      style={{ backgroundColor: note.style.backgroundColor }}
    >
      {getNote(note.type)}
      <Link to={`/note/${note.id}`}>Edit note</Link>

      <NoteBar
        note={note}
        notes={notes}
        setNotes={setNotes}
        onChangeColor={onChangeColor}
        onToggleIsPinned={onToggleIsPinned}
      />
    </article>
  );
}
