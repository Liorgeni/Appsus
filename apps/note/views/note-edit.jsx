const { useEffect, useState } = React;
const { useParams, useNavigate, Link } = ReactRouterDOM;
import { noteService } from "../services/note.service.js";
import { NoteBar } from "../cmps/note-bar.jsx";
import { NoteTextUpdate } from "../cmps/note-text/note-text-update.jsx";
import { NoteType } from "../global.vars.js";

export function NoteEdit() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [noteData, setNoteData] = useState({});

  useEffect(() => {
    loadNote();
  }, [noteId]);

  function loadNote() {
    noteService
      .get(noteId)
      .then((note) => {
        setNote(note);
        noteService.save(note);
      })
      .catch((err) => {
        console.log("Had issues in note details", err);
        navigate("/note");
      });
  }

  function onUpdateNote(noteId, noteData) {
    noteService.updateNote(noteId, noteData).then((note) => {
      setNoteData(note);
    });
  }

  if (!note) return <div> Loading...</div>;
  return (
    <section className="note-edit-container">
      <h1>note-edit</h1>
      <h1>{note.info.txt}</h1>
      <p>{note.type}</p>
      <button>close modal</button>
      <NoteTextUpdate note={note} onUpdateNote={onUpdateNote} />
    </section>
  );
}
