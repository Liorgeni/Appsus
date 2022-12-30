import { NoteType } from "../global.vars.js";
const { useEffect, useState } = React;

// const NOTE_TYPE = {
//   text: "text",
//   todo: "todo",
//   image: "image",
//   video: "video",
//   recording: "recording",
//   audio: "audio",
// };

export function NoteAdd({ onAddNewNote }) {
  const [note, setNote] = useState({});
  const [noteType, setNoteType] = useState(NoteType.text);
  const [noteData, setNoteData] = useState(NoteType.text);

  useEffect(() => {}, []);

  function onAddNote() {
    console.log("noteType", noteType);
    console.log("noteData", noteData);
    onAddNewNote(noteType, noteData);
  }

  function getPlaceholder() {
    switch (noteType) {
      case NoteType.text:
        return "Add new text note...";
      case NoteType.todo:
        return "Add new todo list...";
      case NoteType.image:
        return "Add new image...";
      case NoteType.video:
        return "Add video URL...";
      case NoteType.recording:
        return "Add new recording...";
    }
  }

  console.log("NOTE_TYPE.text", NoteType);

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
              noteType === NoteType.recording
                ? "material-symbols-outlined-active"
                : ""
            }`}
            onClick={() => setNoteType(NoteType.recording)}
          >
            radio_button_checked
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
