import { Search, Bell, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/Store/sidebarSlice";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4 gap-4">

        {/* Left side: menu btn on mobile, greeting on desktop */}
        <div className="flex items-center gap-3">
          {isMobile && (
            <Button
              variant="ghost"
              className="p-2 hover:bg-transparent"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="hsla(21,90%,48%,1)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          )}

          <div className="hidden md:block">
            <div className="text-sm text-muted-foreground">Good Morning</div>
            <div className="text-2xl font-semibold text-foreground leading-tight">
              Welcome Back!
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 bg-muted border-0 focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
