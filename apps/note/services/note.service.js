console.log("Hi");

import { storageService } from "../../../services/async-storage.service.js";
import { utilService } from "../../../services/util.service.js";

const NOTE_KEY = "noteDB";
_createNotes();

export const noteService = {
  remove,
  query,
  getDefaultFilter,
  save,
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
        type: "note-txt",
        style: { backgroundColor: "#00d" },
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" },
      },
      {
        id: "n102",
        type: "note-img",
        style: { backgroundColor: "#00d" },
        info: { url: "http://some-img/me", title: "Bobi and Me" },
      },
      {
        id: "n103",
        type: "note-todos",
        style: { backgroundColor: "#00d" },
        info: {
          label: "Get my stuff together",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 },
          ],
        },
      },
      {
        id: "n104",
        type: "note-video",
        info: { url: "http://some-img/me", title: "My birthday party" },
        style: { backgroundColor: "#00d" },
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
