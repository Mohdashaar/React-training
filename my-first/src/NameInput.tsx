import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="gmail"
        placeholder="Enter your gmail"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your gmail is: {name}</p>
    </div>
  );
}

export default NameInput;