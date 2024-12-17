import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default App;
