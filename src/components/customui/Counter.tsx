"use client";

import { useState } from "react";
import { Button } from "../shadcnui/button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="grid w-full grid-cols-2 gap-2">
        <h1 className="col-span-2 text-center text-4xl">{count}</h1>

        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
      </section>
    </>
  );
};

export default Counter;
