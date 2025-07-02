import { TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StatsPanel() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="flex items-center justify-between mb-8">
      {/* Greeting Section */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          {greeting}, Mike!
        </h1>
        <p className="text-lg text-muted-foreground">
          Let's make this day productive.
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center space-x-12">
        {/* Tasks Done */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-1">Tasks done</p>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-foreground">2,543</span>
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
        </div>

        {/* Hours Saved */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-1">Hours saved</p>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-foreground">82%</span>
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
        </div>

        {/* Add Task Button */}
        <Button 
          className="floating-button rounded-full h-12 px-6 bg-primary hover:bg-primary-hover text-primary-foreground"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add task
        </Button>
      </div>
    </div>
  );
}