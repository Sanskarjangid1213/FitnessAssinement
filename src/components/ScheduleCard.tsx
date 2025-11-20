import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import stretchIcon from "@/assets/Group 107 1.png";
import yogaIcon from "@/assets/Yoga.png";

const scheduleData = [
  {
    day: "Monday",
    activity: "Stretch",
    time: "At 08:00",
    duration: "20 Sets",
    icon: stretchIcon,
    selected: true,
  },
  {
    day: "Tuesday",
    activity: "Back Stretch",
    time: "At 08:00",
    duration: "10 Round",
    icon: stretchIcon,
    selected: false,
  },
  {
    day: "Wednesday",
    activity: "Yoga",
    time: "At 08:00",
    duration: "20 min",
    icon: yogaIcon,
    selected: false,
  },
];

export function ScheduleCard() {
  return (
    <Card className="shadow-none border-none bg-[#F5F8FC] p-4  w-full">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between pb-4 px-0">
        <CardTitle className="text-xl font-semibold">My Schedule</CardTitle>
        <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
          View All <ChevronRight className="h-4 w-4" />
        </button>
      </CardHeader>

      <CardContent className="space-y-5 px-0">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl shadow-sm bg-white "
          >
            <p className="text-xl font-semibold text-gray-600 pl-3  mb-2">
              {item.day}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={item.icon}
                alt={item.activity}
                className="h-14 w-14 object-contain"
              />

              <div className="flex-1">
                <p className="font-semibold text-[17px]">{item.activity}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>

              <span className="text-sm font-semibold text-[hsla(25,95%,53%,1)] bg-[hsla(33,100%,96%,1)]  px-3 py-1 rounded-full">
                {item.duration}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
