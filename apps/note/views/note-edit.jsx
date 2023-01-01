const { useEffect, useState } = React;
const { useParams, useNavigate, Link } = ReactRouterDOM;

import { noteService } from "../services/note.service.js";
import { NoteBar } from "../cmps/note-bar.jsx";
import { NoteType } from "../global.vars.js";

import { NoteTextUpdate } from "../cmps/note-text/note-text-update.jsx";
import { NoteImageUpdate } from "../cmps/note-image/note-image-update.jsx";
import { NoteToDoUpdate } from "../cmps/note-todo/note-todo-update.jsx";
import { NoteVideoUpdate } from "../cmps/note-video/note-video-update.jsx";

export function NoteEdit() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [noteToEdit, setNoteToEdit] = useState({});
  // const [noteData, setNoteData] = useState(NoteType.text);

  // console.log(noteData, "noteData");
  useEffect(() => {
    if (!noteId) return;
    loadNote();
  }, [noteId]);

  function loadNote() {
    noteService
      .get(noteId)
      .then((note) => setNoteToEdit(note))
      .catch((err) => {
        console.log("Had issues in note details", err);
        navigate("/note");
      });
  }

  function handleChange({ target }) {
    let { value, type, name: field } = target;
    value = type === "number" ? +value : value;
    if (field === "txt") {
      return setNoteToEdit((prevNote) => ({
        ...prevNote,
        info: { txt: value },
      }));
    } else if (field === "video" || "image") {
      setNoteToEdit((prevNote) => ({ ...prevNote, info: { url: value } }));
    } else return;
  }

  function onSaveNote(ev) {
    ev.preventDefault();
    noteService.save(noteToEdit).then((note) => {
      console.log("note saved", note);
      setNoteToEdit(note);
      navigate("/note");
    });
  }

  function getNoteToUpdate(noteType) {
    switch (noteType) {
      case NoteType.text:
        return (
          <NoteTextUpdate
            handleChange={handleChange}
            onSaveNote={onSaveNote}
            noteToEdit={noteToEdit}
          />
        );
      case NoteType.todo:
        return (
          <NoteToDoUpdate
            handleChange={handleChange}
            onSaveNote={onSaveNote}
            noteToEdit={noteToEdit}
          />
        );
      case NoteType.image:
        return (
          <NoteImageUpdate
            handleChange={handleChange}
            onSaveNote={onSaveNote}
            noteToEdit={noteToEdit}
          />
        );
      case NoteType.video:
        return (
          <NoteVideoUpdate
            handleChange={handleChange}
            onSaveNote={onSaveNote}
            noteToEdit={noteToEdit}
          />
        );
    }
  }

  if (!noteToEdit.id) return <div className="loading"> Loading...</div>;
  return (
    <article
      key={noteToEdit.id}
      className={`${noteToEdit.type} note-edit-container`}
      style={{ backgroundColor: noteToEdit.style.backgroundColor }}
    >
      {getNoteToUpdate(noteToEdit.type)}
      <div className="close-save-btn">
        <span
          class="material-symbols-outlined"
          onClick={() => navigate("/note")}
        >
          close
        </span>
        <span class="material-symbols-outlined" onClick={onSaveNote}>
          save
        </span>{" "}
      </div>
    </article>
  );
}
