import { useState } from "react";
import { MoreVertical, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    stage: "brief" | "ideation" | "prioritization" | "prd" | "export";
    priority: "high" | "medium" | "low";
    lastUpdated: string;
    teamMembers: number;
    progress: number;
  };
}

const stageConfig = {
  brief: { label: "Brief Creation", color: "bg-accent-purple text-accent-purple-foreground" },
  ideation: { label: "AI Ideation", color: "bg-accent-green text-accent-green-foreground" },
  prioritization: { label: "MoSCoW Prioritization", color: "bg-secondary text-secondary-foreground" },
  prd: { label: "PRD Review", color: "bg-primary text-primary-foreground" },
  export: { label: "Export Ready", color: "bg-success text-success-foreground" },
};

const priorityConfig = {
  high: { label: "High", color: "bg-red-100 text-red-700 border-red-200" },
  medium: { label: "Medium", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  low: { label: "Low", color: "bg-green-100 text-green-700 border-green-200" },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const stage = stageConfig[project.stage];
  const priority = priorityConfig[project.priority];

  return (
    <div
      className="bg-card border border-border rounded-lg p-6 card-shadow hover:card-shadow-lg transition-all duration-200 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
          <p className="text-secondary text-sm line-clamp-2">{project.description}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Project</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Status and Priority */}
      <div className="flex items-center gap-2 mb-4">
        <Badge className={stage.color}>{stage.label}</Badge>
        <Badge variant="outline" className={priority.color}>
          {priority.label}
        </Badge>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="text-sm font-medium text-primary">{project.progress}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Meta Information */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{project.lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{project.teamMembers}</span>
          </div>
        </div>
        
        {isHovered && (
          <Button variant="outline" size="sm">
            Open Project
          </Button>
        )}
      </div>
    </div>
  );
}