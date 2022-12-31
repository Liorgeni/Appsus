import { NoteType } from "../global.vars.js";
const { useEffect, useState } = React;

export function NoteAdd({ onAddNewNote }) {
  const [noteType, setNoteType] = useState(NoteType.text);
  const [noteData, setNoteData] = useState(NoteType.text);

  useEffect(() => {}, []);

  function onAddNote() {
    onAddNewNote(noteType, noteData);
  }

  function getPlaceholder() {
    switch (noteType) {
      case NoteType.text:
        return "Add new text note...";
      case NoteType.todo:
        return "Add your todo list title...";
      case NoteType.image:
        return "Add image URL...";
      case NoteType.video:
        return "Add video URL...";
      case NoteType.map:
        return "Enter city name...";
    }
  }

  return (
    <section className="note-add">
      <ul className="flex clean-list space-between">
        <input
          className="new-note"
          type="text"
          placeholder={getPlaceholder()}
          onChange={(event) => setNoteData(event.target.value)}
        />
        <li>
          <span
            className={`material-symbols-outlined ${
              noteType === NoteType.text
                ? "material-symbols-outlined-active"
                : ""
            }`}
            onClick={() => setNoteType(NoteType.text)}
          >
            text_format
          </span>
        </li>
        <li>
          <span
            className={`material-symbols-outlined ${
              noteType === NoteType.todo
                ? "material-symbols-outlined-active"
                : ""
            }`}
            onClick={() => setNoteType(NoteType.todo)}
          >
            checklist
          </span>
        </li>
        <li>
          <span
            className={`material-symbols-outlined ${
              noteType === NoteType.image
                ? "material-symbols-outlined-active"
                : ""
            }`}
            onClick={() => setNoteType(NoteType.image)}
          >
            imagesmode
          </span>
        </li>
        <li>
          <span
            className={`material-symbols-outlined ${
              noteType === NoteType.video
                ? "material-symbols-outlined-active"
                : ""
            }`}
            onClick={() => setNoteType(NoteType.video)}
          >
            movie
          </span>
        </li>
        <li>
          <span
            className={`material-symbols-outlined ${
              noteType === NoteType.map
                ? "material-symbols-outlined-active"
                : ""
            }`}
            onClick={() => setNoteType(NoteType.map)}
          >
            add_location
          </span>
        </li>
        <li>
          <span
            className="material-symbols-outlined"
            onClick={() => onAddNote()}
          >
            note_add
          </span>
        </li>
      </ul>
    </section>
  );
}
