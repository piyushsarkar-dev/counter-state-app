"use client";

import NumberFlow from "@number-flow/react";
import { useState } from "react";
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
  const refresh = () => {
    setCount(0);
    cycleValue(0);
  };

  // ADVANCED A LOGIC DONE
  const [value, cycleValue] = useState(0);
  const cyclePlus = () => {
    cycleValue(value + 10);
  };
  const cycleMinus = () => {
    cycleValue(value - 10);
  };
  const random = () => {
    const min = -10;
    const max = 10;

    cycleValue(Math.floor(Math.random() * (max - min + 1)) + min);
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
              className="col-span-2">
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
              <NumberFlow value={value} />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button>-10</Button>
            <Button>+10</Button>
            <Button className="col-span-2">CUSTOM</Button>
            <Button
              onClick={refresh}
              className="col-span-2 transition-colors hover:bg-red-500 hover:text-white">
              Refresh
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Advanced;
