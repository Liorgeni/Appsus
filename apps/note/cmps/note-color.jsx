export function ColorSelect({ changeColor }) {
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

  function onChangeColor(color) {
    changeColor(color);
  }

  return (
    <section className="note-color flex wrap justify-center">
      {colors.map((color) => {
        return (
          <div
            className="note-color-item "
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => onChangeColor(color)}
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
