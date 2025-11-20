import { FoodTable } from "@/components/FoodTable";
import { GoalProgressChart } from "@/components/GoalProgressChart";
import { GoalsCard } from "@/components/GoalsCard";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { PromotionalCard } from "@/components/PromotionalCard";
import { ScheduleCard } from "@/components/ScheduleCard";

import { StatCard } from "@/components/StatCard";

import DumbbellIcon from "@/assets/icon/Workout.svg?react";
import FlameIcon from "@/assets/icon/Caloris.svg?react";
import FootprintsIcon from "@/assets/icon/Step.svg?react";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />

      <main className="flex-1 p-6 bg-[#F5F8FC] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <HeroBanner />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                  title="Workout"
                  value={4 + " hrs"}
                  icon={DumbbellIcon}
                  variant="cyan"
                />
                <StatCard
                  title="Calories"
                  value="1800 kcl"
                  icon={FlameIcon}
                  variant="orange"
                />
                <StatCard
                  title="Steps"
                  value="2200 steps"
                  icon={FootprintsIcon}
                  variant="purple"
                />
            </div>

            <GoalProgressChart />

            <FoodTable />
          </div>

          <div className="space-y-6">
            <ScheduleCard />
            <GoalsCard />
            <PromotionalCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
