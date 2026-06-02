"use client";

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
  };

  // ADVANCED A LOGIC DONE

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
            <CardTitle className="text-center text-2xl">{count}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button>-100</Button>
            <Button>+100</Button>
            <Button>-10</Button>
            <Button>+10</Button>
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
