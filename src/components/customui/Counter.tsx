"use client";

import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcnui/card";
import { TabsContent } from "../shadcnui/tabs";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countBasic, setCountBasic] = useState(0);
  const [countPro, setCountPro] = useState(0);
  return (
    <>
      <TabsContent value="counter">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{count}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground grid grid-cols-2 gap-3 text-sm">
            <Button onClick={() => setCount(count - 1)}>-1</Button>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="basic">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{countBasic}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground grid grid-cols-2 gap-3 text-sm">
            <Button onClick={() => setCountBasic(countBasic - 10)}>-10</Button>
            <Button onClick={() => setCountBasic(countBasic + 10)}>+10</Button>
            <Button onClick={() => setCountBasic(countBasic - 1)}>-1</Button>
            <Button onClick={() => setCountBasic(countBasic + 1)}>+1</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="pro">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{countPro}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground grid grid-cols-2 gap-3 text-sm">
            <Button
              className="grid-cols-2"
              onClick={() => setCountPro(countPro - 10)}>
              -10
            </Button>
            <Button onClick={() => setCountPro(countPro + 10)}>+10</Button>
            <Button onClick={() => setCountPro(countPro - 1)}>-1</Button>
            <Button onClick={() => setCountPro(countPro + 1)}>+1</Button>
            <Button
              disabled={countPro === 0}
              className="col-span-2 transition-colors hover:bg-red-500 hover:text-white"
              onClick={() => setCountPro(0)}>
              Refresh
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Counter;
