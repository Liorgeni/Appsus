const { useState, useEffect } = React;
const { Link } = ReactRouterDOM;

import { NoteList } from "../cmps/note-list.jsx";
import { NoteAdd } from "../cmps/note-add.jsx";
import { NoteFilter } from "../cmps/note-filter.jsx";

import { noteService } from "../services/note.service.js";

export function NoteIndex() {
  const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter());
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, [filterBy]);

  function loadNotes() {
    noteService.query(filterBy).then((notesToUpdate) => {
      setNotes(notesToUpdate);
    });
  }

  function onSetFilter(filterByFromFilter) {
    setFilterBy(filterByFromFilter);
  }

  function onAddNewNote(noteType, data) {
    noteService.addNewNote(noteType, data).then(() => {
      console.log("ok");
      loadNotes();
    });
  }

  function onChangeColor(note, color) {
    console.log("1");
    noteService.changeColor(note, color).then(() => {
      console.log("2");
      loadNotes();
    });
  }

  console.log("notes", notes);

  return (
    <section className="note-index">
      <div>
        <NoteFilter onSetFilter={onSetFilter} />
      </div>

      <div>
        <NoteAdd onAddNewNote={onAddNewNote} />
      </div>
      <div>
        <NoteList
          notes={notes}
          setNotes={setNotes}
          onChangeColor={onChangeColor}
        />
      </div>
    </section>
  );
}
// onChange={ev => setCmpType(ev.target.value)}
