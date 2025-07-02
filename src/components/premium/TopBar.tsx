import { useState } from "react";
import { Search, Moon, Sun, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopBar() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="h-20 flex items-center justify-between px-10 glass-card border-b border-border/50 shadow-lg rounded-b-2xl">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
          <div className="w-5 h-5 bg-primary-foreground rounded-full" />
        </div>
        <span className="text-2xl font-bold text-foreground tracking-tight">Livedoc</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDark(!isDark)}
          className="h-10 w-10 rounded-full"
          aria-label="Toggle theme"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIsDark(!isDark); }}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" aria-label="Settings" tabIndex={0}>
          <Settings className="h-5 w-5" />
        </Button>

        {/* Search */}
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" aria-label="Search" tabIndex={0}>
          <Search className="h-5 w-5" />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-primary/10">
              <AvatarImage src="/lovable-uploads/7cce685d-98d2-4c5b-8925-a8e93f5c3145.png" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}