const { useState, useRef } = React;

export function ColorSelect(noteId) {
  const [backgroundColor, setBackgroundColor] = useState([]);

  const colors = [
    "#FFFF",
    "#F6FE88",
    "#C4B8FE",
    "#FF7F50",
    "#BC8F8F",
    "#FFF8DC",
    "#66CDAA",
    "#FAC980",
  ];

  function onChangeColor(noteId, color) {
    console.log("change color");
    console.log(noteId, color);
  }

  return (
    <section className="note-color flex wrap justify-center">
      {colors.map((color) => {
        return (
          <div
            className="note-color-item "
            key={color}
            id={color}
            style={{ backgroundColor: color }}
            onClick={() => onChangeColor(noteId, color)}
          ></div>

          //  <div className="note-color">
          //     <div
          //       id={color}
          //       onClick={onChangeColor}
          //       style={{ backgroundColor: color }}
          //       key={color}
          //       className="note-color-item "
          //     >
          //       color
          //     </div>
          //   </div>
        );
      })}
    </section>
  );
}
