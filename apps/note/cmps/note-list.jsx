import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, setNotes, onChangeColor, onToggleIsPinned }) {
  return (
    <div>
      <h1 style={{ margin: "10px" }}>Pinned</h1>
      <section className="note-list grid-container">
        {notes.map((note) => {
          return note.isPinned ? (
            <article key={note.id}>
              <NotePreview
                note={note}
                notes={notes}
                setNotes={setNotes}
                onChangeColor={onChangeColor}
                onToggleIsPinned={onToggleIsPinned}
              />
            </article>
          ) : (
            ""
          );
        })}
      </section>
      <hr />

      <section className="note-list grid-container">
        {notes.map((note) => {
          return !note.isPinned ? (
            <article key={note.id}>
              <NotePreview
                note={note}
                notes={notes}
                setNotes={setNotes}
                onChangeColor={onChangeColor}
                onToggleIsPinned={onToggleIsPinned}
              />
            </article>
          ) : (
            ""
          );
        })}
      </section>
    </div>
  );
}
