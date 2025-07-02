import { TrendingUp, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PerformanceSummary() {
  // Mock data for the chart
  const dataPoints = [
    { x: 10, y: 60 },
    { x: 20, y: 45 },
    { x: 30, y: 55 },
    { x: 40, y: 40 },
    { x: 50, y: 65 },
    { x: 60, y: 50 },
    { x: 70, y: 75 },
    { x: 80, y: 85 },
    { x: 90, y: 95 }
  ];

  // Create SVG path for the line
  const pathData = dataPoints
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${100 - point.y}`)
    .join(' ');

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-bold text-lg text-foreground">Summary</h3>
          <p className="text-base text-muted-foreground">Track your performance</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <TrendingUp className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-40 mb-6">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          
          {/* Line chart */}
          <path
            d={pathData}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            className="drop-shadow-md"
          />
          
          {/* Data points */}
          {dataPoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={100 - point.y}
              r="4"
              fill="hsl(var(--primary))"
              className="drop-shadow-md"
            />
          ))}
          
          {/* Highlight peak */}
          <circle
            cx="90"
            cy="5"
            r="7"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--card))"
            strokeWidth="2"
            className="drop-shadow-lg"
          />
        </svg>

        {/* Peak label */}
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm px-3 py-1 rounded-lg shadow-md">
          203
        </div>
      </div>

      {/* Chart Labels */}
      <div className="flex justify-between text-sm text-muted-foreground font-semibold">
        <span>400</span>
        <span>300</span>
        <span className="font-bold text-foreground">203 Tasks</span>
      </div>
    </div>
  );
}