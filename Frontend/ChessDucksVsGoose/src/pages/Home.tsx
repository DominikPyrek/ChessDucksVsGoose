import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowBigRight, LucideSparkle, Bot } from "lucide-react";

export default function Home() {
  const items = [
    {
      title: "Ready for Your Next Challenge?",
      text: `Join millions of players worldwide in thrilling matches. Whether you're a beginner or grandmaster, there's always someone to play!`,
      key_points: [
        "4/7 matches with players at your level",
        "Zero ads, pure chess focus",
        "Join 1M+ chess enthusiasts",
      ],
      button_text: "Play Chess Now",
      button_icon: ArrowBigRight,
    },
    {
      title: "New to Chess?",
      text: `Chess is a timeless game of strategy that’s easy to learn but takes a lifetime to master. Whether you're just starting or need a quick refresher, we’ll help you grasp the basics fast.`,
      key_points: [
        "Learn rules in 5 minutes$",
        "Basic checkmate patterns",
        "Starter opening principles",
      ],
      button_text: "Start Learning",
      button_icon: LucideSparkle,
    },
    {
      title: "Challenge the Computer",
      text: `Test your skills against AI opponents—from beginner to grandmaster level. No pressure, just pure chess!`,
      key_points: [
        "Adjustable difficulty – Play at your own pace.",
        "Unlimited practice – No time limits, no stress.",
      ],
      button_text: "Play vs AI",
      button_icon: Bot,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-10 mt-10">Welcome To ChessDucksVsGoose</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {items.map((item) => (
          <Card className="p-4 m-4">
            <h1>{item.title}</h1>
            <p className=" max-w-md whitespace-pre-line ">{item.text}</p>
            {item.key_points && (
              <ul className="space-y-1 list-disc m-4 mt-0">
                {item.key_points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            <Button className="mt-auto w-full">
              {item.button_text} <item.button_icon />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
