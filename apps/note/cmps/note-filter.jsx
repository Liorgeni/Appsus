const { useState, useEffect } = React;

import { noteService } from "../services/note.service.js";

export function NoteFilter({ onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(
    noteService.getDefaultFilter()
  );

  useEffect(() => {
    onSetFilter(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }) {
    console.log("target", target);
    let { value, name: field, type } = target;
    // value = type === "number" ? +value : value;
    setFilterByToEdit((prevFilter) => {
      return { ...prevFilter, [field]: value };
    });
  }

  function onSubmitFilter(ev) {
    ev.preventDefault();
    onSetFilter(filterByToEdit);
    console.log("filter", filterByToEdit);
  }

  return (
    <section className="note-filter">
      <form onSubmit={onSubmitFilter}>
        <label htmlFor="noteTitle"></label>
        <input
          type="text"
          id="noteTitle"
          name="txt"
          placeholder="Search note..."
          value={filterByToEdit.txt}
          onChange={handleChange}
        />

        <label className="or" htmlFor="filter-select">
          Or:
        </label>
        <select
          name="type"
          id="filter-select"
          value={filterByToEdit.type}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="txt">Text</option>
          <option value="todo">Todo</option>
          <option value="img">Image</option>
          <option value="video">Video</option>
          <option value="record">Voice records</option>
        </select>

        {/* <button>Filter</button> */}
      </form>
    </section>
  );
}
