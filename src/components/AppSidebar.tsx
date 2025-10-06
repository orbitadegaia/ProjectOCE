import { Home, TrendingUp, Rocket, FileText, Settings, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import oceTokenLogo from "@/assets/oce-token-logo.png";

const menuItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Marketplace", url: "/marketplace", icon: TrendingUp },
  { title: "ADR Simulation", url: "/adr", icon: Rocket },
  { title: "ESG Reports", url: "/reports", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="flex flex-col h-full">
        <div className="p-6 pb-4">
          <div className="flex items-center justify-center">
            <img 
              src={oceTokenLogo} 
              alt="OCE Token" 
              className="h-16 w-16 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
            />
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-secondary font-medium shadow-glow"
                            : "hover:bg-secondary/50"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-white">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-sidebar-border">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-all"
          >
            <LogOut className="h-5 w-5 flex-shrink-0 text-primary" />
            {!isCollapsed && <span className="text-white">Logout</span>}
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
