import { TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StatsPanel() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="flex items-center justify-between mb-10">
      {/* Greeting Section */}
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold text-foreground mb-2 tracking-tight">
          {greeting}, Mike!
        </h1>
        <p className="text-lg text-muted-foreground">
          Let's make this day productive.
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center space-x-16">
        {/* Tasks Done */}
        <div className="text-center">
          <p className="text-base text-muted-foreground mb-1">Tasks done</p>
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-bold text-foreground">2,543</span>
            <TrendingUp className="h-6 w-6 text-success" />
          </div>
        </div>

        {/* Hours Saved */}
        <div className="text-center">
          <p className="text-base text-muted-foreground mb-1">Hours saved</p>
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-bold text-foreground">82%</span>
            <TrendingUp className="h-6 w-6 text-success" />
          </div>
        </div>

        {/* Add Task Button */}
        <Button 
          className="floating-button rounded-full h-14 px-8 bg-primary hover:bg-primary-hover text-primary-foreground text-lg font-semibold shadow-lg"
          aria-label="Add task"
          tabIndex={0}
        >
          <Plus className="h-6 w-6 mr-2" />
          Add task
        </Button>
      </div>
    </div>
  );
}