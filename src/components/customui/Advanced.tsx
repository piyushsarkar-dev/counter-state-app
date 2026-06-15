"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";
import { Button } from "../shadcnui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcnui/card";
import { TabsContent } from "../shadcnui/tabs";

const Advanced = () => {
  const [count, setCount] = useState(0);

  const plusTen = () => {
    setCount(count + 10);
  };
  const minusTen = () => {
    setCount(count - 10);
  };
  const plusHundred = () => {
    setCount(count + 100);
  };
  const minusHundred = () => {
    setCount(count - 100);
  };

  const [value, setCycleValue] = useState(0);
  const cyclePlus = () => {
    setCycleValue(value + 10);
  };
  const cycleMinus = () => {
    setCycleValue(value - 10);
  };
  const random = () => {
    const min = -10;
    const max = 10;
    setCycleValue(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  // ADVANCED B LOGIC
  const [main, setMain] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, [intervalId]);

  const loopPlus = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setMain((plus) => plus + 1);
    }, 1000);
    setIntervalId(id);
  };

  const loopMinus = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setMain((minus) => minus - 1);
    }, 1000);
    setIntervalId(id);
  };

  const pauseLoop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const refresh = () => {
    setCount(0);
    setCycleValue(0);
    setMain(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div>
      {/* PART A  (General Counter) */}
      <TabsContent value="advanced">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{count}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button onClick={minusHundred}>-100</Button>
            <Button onClick={plusHundred}>+100</Button>
            <Button onClick={minusTen}>-10</Button>
            <Button onClick={plusTen}>+10</Button>
            <Button
              onClick={refresh}
              className="col-span-2 transition-colors hover:bg-red-500 hover:text-white">
              Refresh
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      {/* PART A (Cycle & Random) */}
      <TabsContent value="advanceda">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              <NumberFlow value={value} />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button onClick={cycleMinus}>-10</Button>
            <Button onClick={cyclePlus}>+10</Button>
            <Button
              onClick={random}
              className="col-span-2 transition-colors duration-300 hover:bg-blue-600 hover:text-white">
              Random
            </Button>
            <Button
              onClick={refresh}
              className="col-span-2 transition-colors hover:bg-red-500 hover:text-white">
              Refresh
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      {/* PART B (Loop Control) */}
      <TabsContent value="advancedb">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              <NumberFlow value={main} />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button
              onClick={loopMinus}
              disabled={intervalId !== null}>
              Loop -1
            </Button>
            <Button
              onClick={loopPlus}
              disabled={intervalId !== null}>
              Loop +1
            </Button>

            <Button
              onClick={pauseLoop}
              disabled={intervalId === null}
              className="col-span-2 transition-colors hover:bg-blue-600 hover:text-white disabled:bg-gray-400">
              Pause
            </Button>

            <Button
              onClick={refresh}
              disabled={intervalId !== null}
              className="col-span-2 transition-colors hover:bg-red-500 hover:text-white disabled:bg-gray-400">
              Refresh
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
};

export default Advanced;
