"use client";

import { globalValue } from "@/lib/atom";
import NumberFlow from "@number-flow/react";
import { useAtom } from "jotai";
import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcnui/card";
import { Input } from "../shadcnui/input";
import { TabsContent } from "../shadcnui/tabs";

const Supreme = () => {
  const [value, setValue] = useAtom(globalValue);
  const [inputValue, setInputValue] = useState("");

  const handleRefresh = () => {
    setValue(0);
    setInputValue("");
  };

  return (
    <>
      {/* Elite */}
      <TabsContent value="elite">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              <NumberFlow value={value} />
            </CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground grid gap-2 text-sm">
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <Button onClick={() => setValue(Number(inputValue))}>
                Submit
              </Button>
            </div>

            <Button
              className="w-full transition-colors hover:bg-red-500 hover:text-white"
              onClick={handleRefresh}>
              Refresh
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Supreme;
