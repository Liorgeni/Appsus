const { useEffect, useState } = React;
const { useParams, useNavigate, Link } = ReactRouterDOM;
import { noteService } from "../services/note.service.js";

export function NoteEdit() {
  const [note, setNotes] = useState(null);
  console.log("note");

  const { noteId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadNote();
  }, [noteId]);

  function loadNote() {
    noteService
      .get(noteId)
      .then((note) => {
        setNotes(note);
      })
      .catch((err) => {
        console.log("Had issues in note details", err);
        navigate("/note");
      });
  }

  if (!note) return <div> Loading...</div>;
  return (
    <section className="note-edit-container">
      <h1>note-edit</h1>
      <h1>{note.info.txt}</h1>
      <p>{note.type}</p>
    </section>
  );
}
