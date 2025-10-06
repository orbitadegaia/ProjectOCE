import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-white flex items-center px-6 sticky top-0 z-10 shadow-sm flex-shrink-0">
            <SidebarTrigger>
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Menu className="h-5 w-5" />
              </Button>
            </SidebarTrigger>
            <div className="ml-auto flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Simulation Mode
              </div>
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
          </header>
          <main className="flex-1 p-6 overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
