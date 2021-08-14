import React from "react";
const CreditItem = React.forwardRef((props, ref) => {
  const handleKeyUp = (e) => {
    switch (e.code) {
      case "Backspace": {
        props.handleBackspace(e.target.value);
        break;
      }
      case "ShiftLeft":
      case "Tab":
      case "ArrowRight":
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
        break;
      default: {
        props.handleChange(e.target.value);
      }
    }
  };

  return (
    <input
      type="text"
      ref={ref}
      maxLength={props.maxLength}
      onKeyUp={handleKeyUp}
      style={{
        width: "3rem",
        height: "1.50rem",
        padding: "0.25rem",
        margin: "0.25rem",
        fontWeight: "800"
      }}
    />
  );
});

export default CreditItem;
