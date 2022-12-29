export function ColorSelect() {
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

  function onChangeColor() {
    console.log("change color");
  }

  return (
    <section>
      {colors.map((color) => {
        return (
          <div className="note-color">
            <div
              id={color}
              onClick={onChangeColor}
              style={{ backgroundColor: color }}
              key={color}
              className="note-color-item "
            ></div>
          </div>
        );
      })}
    </section>
  );
}
