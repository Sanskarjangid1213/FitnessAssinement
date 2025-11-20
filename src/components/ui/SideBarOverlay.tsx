import { HelpCircle, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import WorkoutIcon from "@/assets/icon/Workout.svg?react";
import VectorIcon from "@/assets/icon/Vector.svg?react";
import DietIcon from "@/assets/icon/DietPlan.svg?react";
import GoalIcon from "@/assets/icon/Goal.svg?react";
import sheduleIcon from "@/assets/icon/Schedule.svg?react";
import progressIcon from "@/assets/icon/Progres.svg?react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", icon: VectorIcon, path: "/" },
  { name: "Workout", icon: WorkoutIcon, path: "/workout" },
  { name: "Diet Plan", icon: DietIcon, path: "/diet" },
  { name: "Goals", icon: GoalIcon, path: "/goals" },
  { name: "My Schedule", icon: sheduleIcon, path: "/schedule" },
  { name: "Progress", icon: progressIcon, path: "/progress" },
];

export function SideBarOverlay({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen w-[260px] bg-white border-r border-border flex flex-col",
        "z-9999 shadow-xl",
        "transition-transform duration-300",
        className
      )}
    >
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 text-[hsla(25,95%,53%,1)]">
          <span className="text-2xl font-bold font-Manrope">Fitness</span>
          <WorkoutIcon className="h-8 w-8 fill-current mt-0.5" />
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} end>
                {({ isActive }) => (
                  <div
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                      isActive
                        ? "bg-[hsla(25,95%,53%,1)] text-white"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-5 w-5 transition-colors",
                        isActive
                          ? "fill-white stroke-white"
                          : "fill-none stroke-[currentColor]"
                      )}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-border space-y-1">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all w-full">
          <HelpCircle className="h-5 w-5" />
          <span className="font-medium">Help</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all w-full">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
