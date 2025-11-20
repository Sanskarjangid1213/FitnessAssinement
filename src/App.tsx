import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Sidebar } from "./components/Sidebar";

import { useIsMobile } from "./hooks/use-mobile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./Store/store";
import { closeSidebar, openSidebar } from "./Store/sidebarSlice";
import { SideBarOverlay } from "./components/ui/SideBarOverlay";

function App() {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const isOpen = useSelector((state: RootState) => state.sidebar.open);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (isMobile) dispatch(closeSidebar());
    else dispatch(openSidebar());
  }, [isMobile, dispatch]);

  useEffect(() => {
    if (!isMobile) return;

    const alreadyShown = sessionStorage.getItem("welcome_shown");
    if (alreadyShown) return;

    setShowSplash(true);
    sessionStorage.setItem("welcome_shown", "true");

    const t = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(t);
  }, [isMobile]);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {isMobile && showSplash && (
          <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/60">
            <div className="rounded-2xlpx-6 py-4 shadow-lg text-center">
              <p className="text-lg text-white">Good Morning</p>
              <p className="text-2xl font-semibold text-white">
                Welcome Back!
              </p>
            </div>
          </div>
        )}
        <div className="flex h-screen overflow-hidden">

          {!isMobile && <Sidebar />}

          {isMobile && (
            <>
             
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black/40 z-9990"
                  onClick={() => dispatch(closeSidebar())}
                />
              )}

              <SideBarOverlay
                className={
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }
              />
            </>
          )}

          {/* MAIN CONTENT */}
          <main className="flex-1 overflow-auto">
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
