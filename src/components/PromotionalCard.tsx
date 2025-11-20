import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import promoGroup from "@/assets/Promotion.png";
import { cn } from "@/lib/utils";

export function PromotionalCard() {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border border-[#7C6DD7]/40 rounded-[8px] shadow-md ",
        "bg-[linear-gradient(149.71deg,#7C6DD7_4.71%,#C4BAFF_110.44%)]",
        "text-white"
      )}
    >
      <div className="relative z-20 p-6 pr-32">
        <h3 className="text-lg font-semibold mb-2">
          50% off on <span className="font-bold">Premium Membership</span>
        </h3>
        <p className="text-sm opacity-90 mb-4 max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </p>
        <Button className="bg-[#FF8A00] hover:bg-[#FF7A00] text-white font-semibold px-6 rounded-full shadow">
          Upgrade
        </Button>
      </div>


      <div
        className="
          absolute
          top-24 right-[-70px]
          w-[234px] h-[234px]
          rounded-full
          bg-[hsla(248,57%,64%,0.4)]
          rotate-[64.49deg]
          z-10
        "
      />

      <div
        className="
          absolute
          top-44 right-0
          w-[77px] h-[77px]
          rounded-full
          bg-[hsla(248,57%,64%,0.4)]
          rotate-[64.49deg]
          z-10
        "
      />

      {/* People image */}
      <div className="absolute bottom-0 right-0 w-[150px] h-[180px] z-20 flex items-end">
        <img
          src={promoGroup}
          alt="Premium membership promotion"
          className="w-full h-full object-contain"
        />
      </div>
    </Card>
  );
}
