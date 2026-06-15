import { Button } from "../shadcnui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcnui/card";
import { TabsContent } from "../shadcnui/tabs";

const Supreme = () => {
  return (
    <div>
      {" "}
      <TabsContent value="elite">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{0}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground grid grid-cols-2 gap-3 text-sm">
            <Button>-1</Button>
            <Button>+1</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="ultimate">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{0}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground grid grid-cols-2 gap-3 text-sm">
            <Button>-10</Button>
            <Button>+10</Button>
            <Button>-1</Button>
            <Button>+1</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="quantum">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{0}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground grid grid-cols-2 gap-3 text-sm">
            <Button className="grid-cols-2">-10</Button>
            <Button>+10</Button>
            <Button>-1</Button>
            <Button>+1</Button>
            <Button className="col-span-2 transition-colors hover:bg-red-500 hover:text-white">
              Refresh
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
};

export default Supreme;
