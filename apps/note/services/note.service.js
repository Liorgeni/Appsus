console.log("Hi");

import { storageService } from "../../../services/async-storage.service.js";
import { utilService } from "../../../services/util.service.js";
import { NoteType } from "../global.vars.js";

const NOTE_KEY = "noteDB";
_createNotes();

export const noteService = {
  remove,
  query,
  getDefaultFilter,
  save,
  addNewNote,
  changeColor,
  toggleIsPinned,
};

function query(filterBy = getDefaultFilter()) {
  return storageService.query(NOTE_KEY).then((notes) => {
    if (filterBy.txt) {
      console.log("filterBy", filterBy);
      const regex = new RegExp(filterBy.txt, "i");
      notes = notes.filter((note) => regex.test(note.info.title));
    }
    if (filterBy.type) {
      const regex = new RegExp(filterBy.type, "i");
      notes = notes.filter((note) => regex.test(note.type));
      console.log(notes);
    }
    return notes;
  });
}

function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId);
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: "n101",
        type: NoteType.text,
        style: { backgroundColor: "#fff" },
        isPinned: false,
        info: { txt: "Fullstack Me Baby!" },
      },
      {
        id: "n102",
        isPinned: false,
        type: NoteType.image,
        style: { backgroundColor: "#fff" },
        info: {
          url: "https://static.wixstatic.com/media/ac878b_c08a33f1105d4350b282a07a5867f969~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg",
        },
      },
      {
        id: "n103",
        type: NoteType.todo,
        isPinned: false,
        style: { backgroundColor: "#fff" },
        info: {
          label: "Get my stuff together",
          todos: [
            { txt: "Driving liscence", doneAt: null, isDone: false },
            { txt: "Coding power", doneAt: 187111111, isDone: false },
          ],
        },
      },
      {
        id: "n104",
        isPinned: false,
        type: NoteType.video,
        info: {
          url: "https://www.youtube.com/watch?v=SI8TN0EPmAw",
        },
        style: { backgroundColor: "#fff" },
      },
    ];
  }
  utilService.saveToStorage(NOTE_KEY, notes);
}

function getDefaultFilter() {
  return { txt: "", type: "" };
}

function save(note) {
  if (note.id) {
    return storageService.put(NOTE_KEY, note);
  } else {
    return storageService.post(NOTE_KEY, note);
  }
}

function _saveNotesToStorage(notes) {
  storageService.saveToStorage(NOTE_KEY, notes);
}

function _loadNotesFromStorage() {
  return storageService.loadFromStorage(NOTE_KEY);
}

function changeColor(note, color) {
  note.style.backgroundColor = color;
  return save(note);
}

function toggleIsPinned(note, isPinned) {
  note.isPinned = isPinned;
  return save(note);
}

function addNewNote(noteType, data) {
  const newNote = {
    type: noteType,
    style: { backgroundColor: "#fff" },
    isPinned: false,
  };
  switch (noteType) {
    case NoteType.text:
      newNote.info = { txt: data };
      break;
    case NoteType.todo:
      newNote.info = { lable: data, todos: [txt, doneAt, isDone] };
      break;
    case NoteType.image:
      newNote.info = { url: data };

      break;
    case NoteType.video:
      newNote.info = { url: data };
      break;
    case NoteType.map:
      newNote.info = { address: data };
      break;
    default:
  }

  return save(newNote);
}
