
import { Card, CardContent } from "@/components/ui/card";

const Philosophy = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My Philosophy</h2>
        <Card className="border-none shadow-lg">
          <CardContent className="pt-6">
            <blockquote className="text-xl md:text-2xl font-medium italic">
              "People &amp; Culture {`>`} Product {`>`} Profit: Building great companies starts with great people and healthy culture — everything else follows."
            </blockquote>
            <p className="mt-6 text-muted-foreground">
              A key lesson from my startup journey, reinforced by Ben Horowitz's "The Hard Things About Hard Things"
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Philosophy;
