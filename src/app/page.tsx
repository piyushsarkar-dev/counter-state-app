import Counter from "@/components/customui/Counter";
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcnui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter State App",
  description: "Counter State App built with Next.js",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Tabs
        defaultValue="counter"
        className="w-[400px]">
        <TabsList>
          <TabsTrigger value="counter">Counter</TabsTrigger>
          <TabsTrigger value="basic">Basic Counter</TabsTrigger>
          <TabsTrigger value="pro">Pro Counter</TabsTrigger>
        </TabsList>
        <Counter />
      </Tabs>
    </section>
  );
};

export default page;
