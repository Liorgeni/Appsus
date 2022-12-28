const { Link } = ReactRouterDOM;

import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, setNotes }) {
  return (
    <section className="note-list grid-container">
      {notes.map((note) => (
        <article key={note.id}>
          <NotePreview note={note} notes={notes} setNotes={setNotes} />
        </article>
      ))}
    </section>
  );
}

{
  /* <div class="edit-style-text-container flex ">
<li><span class="material-symbols-outlined" onclick="onDecreaseFont()"> text_decrease </span></li>
<li><span class="material-symbols-outlined" onclick="onIncreaseFont()"> text_increase </span></li>
<input class="trans" style="opacity: 0; position:absolute" type="color" value="#ffffff" id="style2" oninput="onChangeTextColor(this.value)" />  
<li><label for="style2"><span class="material-symbols-outlined">palette</span></label></li>

<div>  <div class="edit-style-text-container flex ">
                  <li><span class="material-symbols-outlined" onclick="onDecreaseFont()"> text_decrease </span></li>
                  <li><span class="material-symbols-outlined" onclick="onIncreaseFont()"> text_increase </span></li>
 
            
              <div> */
}
