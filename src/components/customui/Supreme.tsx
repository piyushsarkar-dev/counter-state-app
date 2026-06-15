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

  const handleSubmit = () => {
    const nextValue = Number(inputValue);

    if (Number.isNaN(nextValue)) return;

    setValue(nextValue);
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

          <CardContent className="text-muted-foreground text-sm">
            <div className="flex w-full gap-2">
              <Input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1"
                placeholder="Enter Your Count"
              />
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Supreme;
