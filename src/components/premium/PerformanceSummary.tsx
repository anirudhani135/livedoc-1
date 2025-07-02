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
    <div className="glass-card glass-card-hover rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">Summary</h3>
          <p className="text-sm text-muted-foreground">Track your performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <TrendingUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-32 mb-4">
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
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          
          {/* Data points */}
          {dataPoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={100 - point.y}
              r="3"
              fill="hsl(var(--primary))"
              className="drop-shadow-sm"
            />
          ))}
          
          {/* Highlight peak */}
          <circle
            cx="90"
            cy="5"
            r="6"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--card))"
            strokeWidth="2"
            className="drop-shadow-md"
          />
        </svg>

        {/* Peak label */}
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
          203
        </div>
      </div>

      {/* Chart Labels */}
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>400</span>
        <span>300</span>
        <span className="font-medium text-foreground">203 Tasks</span>
      </div>
    </div>
  );
}