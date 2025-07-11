import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowBigRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl">YEYYYYYYYY</h1>
      <Card className="flex p-4 m-4 gap-10 text-center">
        <h1>Ready for Your Next Challenge?</h1>
        <p className=" max-w-md">
          Join millions of players worldwide in thrilling matches. Whether
          you're a beginner or grandmaster, there's always someone to play!
        </p>
        <Button>
          Play Chess Now <ArrowBigRight />
        </Button>
      </Card>
      <Card className="flex p-4 m-4 gap-10">
        <h1>Why Play Here?</h1>
        <p>
          • 24/7 matches with players at your level
          <br />• <strong>Zero ads</strong>, pure chess focus
          <br />• Learn with <strong>AI-powered analysis</strong>
          <br />• Join 1M+ chess enthusiasts
        </p>
        <Button>Play chess now</Button>
      </Card>
      <Card className="flex p-4 m-4 gap-10">
        <h1>Tests</h1>
        <Button>Play c hess now</Button>
      </Card>
    </div>
  );
}
