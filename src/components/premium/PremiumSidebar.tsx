import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  FolderOpen, 
  FileText, 
  Lightbulb, 
  Plus,
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "New Project", href: "/new-project", icon: Plus },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Templates", href: "/templates", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface PremiumSidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export function PremiumSidebar({ collapsed, setCollapsed }: PremiumSidebarProps) {
  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-50 lg:hidden h-8 w-8 rounded-full glass-card"
      >
        {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full glass-card border-r border-border/50 transition-all duration-300 z-40",
        "lg:relative lg:translate-x-0",
        collapsed ? "-translate-x-full lg:w-16" : "translate-x-0 w-64"
      )}>
        {/* Navigation */}
        <nav className="flex flex-col items-center pt-24 space-y-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                )
              }
              aria-label={item.name}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = item.href; }}
            >
              <item.icon className="h-6 w-6" />
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
    </>
  );
}