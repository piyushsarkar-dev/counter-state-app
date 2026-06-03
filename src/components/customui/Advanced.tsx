"use client";

import NumberFlow from "@number-flow/react";
import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcnui/card";
import { Input } from "../shadcnui/input";
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
  const refresh = () => {
    setCount(0);
    setCycleValue(0);
    setMainValue(0);
    setCustomValue("");
  };

  // ADVANCED A LOGIC DONE
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

  //ADVANCED B LOCIC DONE

  const [mainValue, setMainValue] = useState(0);
  const [customValue, setCustomValue] = useState("");
  const loopIn = () => {
    let current = mainValue;

    const interval = setInterval(() => {
      current++;

      setMainValue(current + 1);
    }, 1000);
  };

  return (
    <>
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
      {/* PART A  */}
      <TabsContent value="advanceda">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {" "}
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
      {/* PART B */}

      <TabsContent value="advancedb">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              <NumberFlow value={mainValue} />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button onClick={loopOut}>Loop -1</Button>
            <Button onClick={loopIn}>Loop +1</Button>
            <div className="col-span-2 flex gap-2">
              <Input
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                type="number"
                placeholder="Custom Number"
                className="flex-1"
              />
              <Button
                disabled={customValue === ""}
                onClick={() => setMainValue(Number(customValue))}>
                Update State
              </Button>
            </div>
            <Button
              onClick={refresh}
              className="transition-colors hover:bg-red-500 hover:text-white">
              Refresh
            </Button>
            <Button className="transition-colors hover:bg-red-500 hover:text-white">
              Stop
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Advanced;
