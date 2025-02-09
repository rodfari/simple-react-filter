import React, { Fragment } from "react";
import { Range } from "react-range";
import "./SlideRange.sass";

const SlideRange = () => {
  const [values, setValues] = React.useState([50]);

  return (
    <div className="slider">

      <Range
        label="Select your value"
        step={1}
        min={0}
        max={100}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "3px",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#007bff",
            }}
          />
        )}
      />
    </div>
  );
};

export default SlideRange;
