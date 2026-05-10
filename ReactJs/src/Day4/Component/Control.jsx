import { useState } from "react";

export default function Control() {
  const [controlBtn, setControlBtn] = useState();
  function controlItem(controlBtn) {}
  return (
    <div>
      <button onClick={controlItem}>Active</button>
    </div>
  );
}
