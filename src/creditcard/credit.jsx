import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CreditItem from "./credititem";
const Credit = (props) => {
  const { len, BoxLen, handletext } = props;
  const inputs = useRef(new Array(BoxLen).fill(""));
  const values = useRef(new Array(BoxLen).fill(""));

  const handleCallbackRef = (val, position) => {
    inputs.current[position] = val;
    //console.log(inputs.current[position]);
  };

  const handleChange = (val, index) => {
    values.current[index] = val;
    if (val.length === len && index < len) {
      inputs.current[index + 1].focus();
    }

    handletext(values.current.join(" "));
  };

  const handleBackspace = (val, index) => {
    values.current[index] = val;
    if (val.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
    handletext(values.current.join(" "));
  };

  const handlePaste = (e) => {
    // THIS WILL ONLY WORK FOR 1 PER BOX
    e.preventDefault();
    const val = e.clipboardData
      .getData("text")
      .split("")
      .filter((a, i) => i < len * BoxLen);
    var i = 0;
    var count = 0;
    var le = Math.ceil(val.length / len);

    while (i < le && val.length > count) {
      if (values.current[i].length < len) {
        values.current[i] += val[count];
        inputs.current[i].value += val[count];
        count++;
      } else {
        inputs.current[i + 1].focus();
        i++;
      }
    }
  };

  useEffect(() => {
    if (inputs.current && inputs.current.length !== 0) {
      inputs.current[0].focus();
    }
  }, []);
  return (
    <div onPaste={handlePaste}>
      {inputs.current.map((item, index) => (
        <CreditItem
          maxLength={len}
          key={index}
          ref={(n) => handleCallbackRef(n, index)}
          handleChange={(value) => handleChange(value, index)}
          handleBackspace={(value) => handleBackspace(value, index)}
        />
      ))}
    </div>
  );
};

Credit.propTypes = {
  maxLength: PropTypes.number
};

Credit.defaultProps = {
  maxLength: 4
};

export default Credit;
