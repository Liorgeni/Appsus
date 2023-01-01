export function NoteImageUpdate({ handleChange, onSaveNote, noteToEdit }) {
  return (
    <div className="flex align-center">
      <h3>Edit image URL</h3>
      <form onSubmit={onSaveNote}>
        <input
          onChange={handleChange}
          name="image"
          defaultValue={noteToEdit.info.url}
        />
      </form>
    </div>
  );
}
