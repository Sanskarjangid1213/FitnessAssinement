import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const goalsData = [
  {
    name: "ABS & Stretch",
    date: "Saturday, April 16 | 08:00 AM",
    target: "30 Min/day",
  },
  {
    name: "Push Up",
    date: "Sunday, April 16 | 08:00 AM",
    target: "50 Sets/day",
  },
];

export function GoalsCard() {
  return (
    <Card className="shadow-none border-none bg-[#F5F8FC] p-4 w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold">Goals</CardTitle>
        <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
          View All <ChevronRight className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent className="p-3 space-y-3">
        {goalsData.map((goal, index) => (
          <div key={index} className="p-5 bg-white rounded-lg space-y-1">
            <div className="flex items-start justify-between">
              <p className="font-semibold text-foreground">{goal.name}</p>
              <p className="text-sm font-medium text-primary">{goal.target}</p>
            </div>
            <span className="text-xs text-muted-foreground">{goal.date}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
