export function NoteVideoUpdate({ handleChange, onSaveNote, noteToEdit }) {
  return (
    <div className="text-update-container flex-grow flex align-center">
      <h3>Edit video URL</h3>
      <form onSubmit={onSaveNote}>
        <input
          onChange={handleChange}
          name="video"
          id="video"
          type="video"
          defaultValue={noteToEdit.info.url}
        />
      </form>
    </div>
  );
}
