const { useState, useEffect } = React;
const { Link, Outlet } = ReactRouterDOM;

import { NoteList } from "../cmps/note-list.jsx";
import { NoteAdd } from "../cmps/note-add.jsx";
import { NoteFilter } from "../cmps/note-filter.jsx";

import { noteService } from "../services/note.service.js";

export function NoteIndex() {
  const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter());
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadNotes();
  }, [filterBy, isModalOpen]);

  function loadNotes() {
    noteService.query(filterBy).then((notesToUpdate) => {
      setNotes(notesToUpdate);
    });
  }

  function onSetFilter(filterByFromFilter) {
    setFilterBy(filterByFromFilter);
  }

  function onAddNewNote(noteType, data) {
    noteService.addNewNote(noteType, data).then((newNotes) => {
      setNotes[newNotes];
      loadNotes();
    });
  }

  function onChangeColor(note, color) {
    noteService.changeColor(note, color).then(() => {
      loadNotes();
    });
  }

  // function onToggleModalDisplay() {
  //   setIsModalOpen(!isModalOpen);
  // }

  function onToggleIsPinned(note, isPinned) {
    noteService.toggleIsPinned(note, isPinned).then((pinnedNotes) => {
      setNotes[pinnedNotes];
      loadNotes();
    });
  }

  return (
    <section className="note-index">
      <div>
        <NoteFilter onSetFilter={onSetFilter} />
      </div>

      <div>
        <NoteAdd onAddNewNote={onAddNewNote} />
      </div>
      <div>
        {/* <Outlet /> */}
        <NoteList
          notes={notes}
          setNotes={setNotes}
          onChangeColor={onChangeColor}
          onToggleIsPinned={onToggleIsPinned}
        />
      </div>
    </section>
  );
}
