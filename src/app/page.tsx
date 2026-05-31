import Counter from "@/components/customui/Counter";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter State App",
  description: "Counter State App built with Next.js",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Counter App</CardTitle>
        </CardHeader>
        <CardContent>
          <Counter />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
