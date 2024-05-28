import { FC, useState } from "react";

const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center gap-8">
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
