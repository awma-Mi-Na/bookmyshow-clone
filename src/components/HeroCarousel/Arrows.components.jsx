export const PrevArrow = (props) => {
  // here props contain className, styles, onClick
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};
export const NextArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};
