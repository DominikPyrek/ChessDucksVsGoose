import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import type { HomePageCardGenProps } from "@/types";

export default function HomePageCardGen({ items }: HomePageCardGenProps) {
  const navigate = useNavigate();
  return (
    <>
      {items.map((item, index) => (
        <Card key={index} className="p-4 m-4">
          <h1>{item.title}</h1>
          <p className=" max-w-md whitespace-pre-line ">{item.text}</p>
          {item.key_points && (
            <ul className="space-y-1 list-disc m-4 mt-0">
              {item.key_points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
          <Button className="mt-auto w-full" onClick={() => navigate(item.to)}>
            {item.button_text} <item.button_icon />
          </Button>
        </Card>
      ))}
    </>
  );
}
