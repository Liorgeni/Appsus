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
  get,
  updateNote,
};

function query(filterBy = getDefaultFilter()) {
  return storageService.query(NOTE_KEY).then((notes) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, "i");
      notes = notes.filter((note) => regex.test(note.info.title));
    }
    if (filterBy.type) {
      const regex = new RegExp(filterBy.type, "i");
      notes = notes.filter((note) => regex.test(note.type));
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
        info: { txt: "My first Note!" },
      },
      {
        id: "n102",
        isPinned: false,
        type: NoteType.image,
        style: { backgroundColor: "#fff" },
        info: {
          url: "https://media.wired.com/photos/5ca648a330f00e47fd82ae77/191:100/w_1280,c_limit/Culture_Matrix_Code_corridor.jpg",
        },
      },
      {
        id: "n103",
        type: NoteType.todo,
        isPinned: false,
        style: { backgroundColor: "#fff" },
        info: {
          label: "Sprint weekend",
          todos: [
            { txt: "pull", doneAt: null, isDone: false },
            { txt: "commit", doneAt: 187111111, isDone: false },
            { txt: "push", doneAt: 187111111, isDone: false },
          ],
        },
      },
      {
        id: "n104",
        isPinned: false,
        type: NoteType.video,
        info: {
          url: "https://www.youtube.com/watch?v=P0SOsgwqlnY",
        },
        style: { backgroundColor: "#fff" },
      },
      {
        id: "n105",
        isPinned: false,
        type: NoteType.map,
        info: {
          url: `https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed`,
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

function get(noteId) {
  return storageService.get(NOTE_KEY, noteId);
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
      newNote.info = {
        lable: data,
        todos: [{ txt: data, doneAt: null, isDone: false }],
      };
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

function updateNote(noteId, data) {
  const newNote = {
    id: noteId,
    style: { backgroundColor: "#fff" },
    isPinned: false,
    info: {
      txt: data,
    },
  };

  return save(newNote);
}
