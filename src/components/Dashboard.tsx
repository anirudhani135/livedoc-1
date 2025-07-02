import { useState } from "react";
import { Search, Filter, Plus, TrendingUp, FileText, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "./ProjectCard";
import heroImage from "@/assets/hero-image.jpg";

// Mock data
const projects = [
  {
    id: "1",
    title: "E-commerce Mobile App",
    description: "A comprehensive mobile application for modern e-commerce with AI-powered recommendations and seamless checkout experience.",
    stage: "ideation" as const,
    priority: "high" as const,
    lastUpdated: "2 hours ago",
    teamMembers: 4,
    progress: 35,
  },
  {
    id: "2",
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics platform for SaaS businesses to track key metrics and user behavior patterns.",
    stage: "prd" as const,
    priority: "medium" as const,
    lastUpdated: "1 day ago",
    teamMembers: 3,
    progress: 78,
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool for marketing teams and content creators.",
    stage: "brief" as const,
    priority: "high" as const,
    lastUpdated: "3 days ago",
    teamMembers: 2,
    progress: 15,
  },
  {
    id: "4",
    title: "Team Collaboration Platform",
    description: "Modern workspace solution for distributed teams with integrated communication and project management.",
    stage: "export" as const,
    priority: "low" as const,
    lastUpdated: "1 week ago",
    teamMembers: 5,
    progress: 100,
  },
];

const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2.5%",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    title: "Team Members",
    value: "8",
    change: "+12%",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Avg. Completion Time",
    value: "14d",
    change: "-5%",
    icon: Clock,
    color: "text-purple-600",
  },
  {
    title: "Success Rate",
    value: "94%",
    change: "+8%",
    icon: TrendingUp,
    color: "text-emerald-600",
  },
];

export function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || project.stage === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex-1 overflow-auto">
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-primary/5 to-accent-purple/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        <img 
          src={heroImage} 
          alt="Livedoc Dashboard" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative h-full flex items-center justify-between px-8">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Welcome back to Livedoc
            </h1>
            <p className="text-secondary text-lg">
              Transform your ideas into structured documentation with AI assistance
            </p>
          </div>
          <Button variant="default" size="lg" className="shadow-lg">
            <Plus className="h-5 w-5 mr-2" />
            Create New Project
          </Button>
        </div>
      </div>

      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 card-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-success mr-1" />
                    <span className="text-sm text-success">{stat.change}</span>
                  </div>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          {/* Header and Controls */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Your Projects</h2>
              <p className="text-secondary">Manage and track your documentation projects</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline" size="default">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-primary mb-2">No projects found</h3>
              <p className="text-secondary mb-4">
                {searchQuery ? "Try adjusting your search terms" : "Create your first project to get started"}
              </p>
              <Button variant="default">
                <Plus className="h-4 w-4 mr-2" />
                Create Project
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}