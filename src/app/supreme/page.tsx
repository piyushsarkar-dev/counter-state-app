import Supreme from "@/components/customui/Supreme";
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcnui/tabs";

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Tabs
        defaultValue="counter"
        className="w-[400px]">
        <TabsList>
          <TabsTrigger value="elite">Elite</TabsTrigger>
          <TabsTrigger value="ultimate">Ultimate</TabsTrigger>
          <TabsTrigger value="quantum">Quantum</TabsTrigger>
        </TabsList>
        <Supreme />
      </Tabs>
    </section>
  );
};

export default page;
