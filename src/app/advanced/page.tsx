import Advanced from "@/components/customui/Advanced";
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcnui/tabs";

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Tabs
        defaultValue="advanced"
        className="w-[400px]">
        <TabsList>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="advanceda">Advanced A</TabsTrigger>
          <TabsTrigger value="advancedb">Advanced B</TabsTrigger>
        </TabsList>
        <Advanced />
      </Tabs>
    </section>
  );
};

export default page;
