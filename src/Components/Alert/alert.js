import React from "react";

function alert(props) {
  return (
    props.alert && (
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>Please Enter a valid Movie Name</p>
      </div>
    )
  );
}

export default alert;
