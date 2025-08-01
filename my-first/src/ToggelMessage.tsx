import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="Toggle">
      {isVisible ? <p>HELLO WELCOME TO MY WEBSITE</p> : <p></p>}
      <button className="btn btn-warning" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ToggleMessage;